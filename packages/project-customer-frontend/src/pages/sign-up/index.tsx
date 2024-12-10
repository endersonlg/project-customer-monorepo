import { Box } from '@/components/box'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { Controller, useForm } from 'react-hook-form'
import { ColorOption, ColorSelect } from '@/components/color-select'
import { getColors } from '@/http/get-colors'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { CustomerDTO } from '@/dtos/customer-dto'
import { FailedModal } from '@/components/failed-modal'
import { useState } from 'react'
import { TextArea } from '@/components/text-area'
import { NextSeo } from 'next-seo'

const CustomerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Required field' })
    .min(3, { message: 'Name must be at least 3 characters long' })
    .max(255, { message: 'Name cannot exceed 255 characters' }),

  email: z
    .string()
    .trim()
    .min(1, { message: 'Required field' })
    .max(320, { message: 'Email cannot exceed 320 characters' })
    .email({ message: 'Invalid e-mail' }),

  cpf: z
    .string()
    .trim()
    .min(1, { message: 'Required field' })
    .length(11, { message: 'CPF must be exactly 11 characters long' })
    .regex(/^\d{11}$/, { message: 'CPF must contain only numbers' }),

  color: z.string().min(1, { message: 'Required field' }),

  observation: z.string().optional(),
})

type CustomerData = z.infer<typeof CustomerSchema>

export default function SignUp({
  colorsOptions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, control, formState } = useForm<CustomerData>({
    resolver: zodResolver(CustomerSchema),
  })

  const { errors, isSubmitting } = formState

  const router = useRouter()

  function handleCloseFailedModal() {
    setErrorMessage('')
  }

  async function onSubmit({
    name,
    email,
    cpf,
    color,
    observation,
  }: CustomerData) {
    try {
      const { data } = await axios.post<CustomerDTO>('/api/sign-up', {
        name,
        email,
        cpf,
        preferred_color_id: color,
        observation,
      })

      router.push(`/success/${data.id}`)
    } catch (err) {
      const messageErrorAux =
        (err as AxiosError<{ message: string }>).response?.data?.message || ''
      setErrorMessage(messageErrorAux)
    }
  }

  return (
    <>
      <NextSeo title="Sign Up | Favorite Color" />
      <main className="flex items-center justify-center">
        <Box>
          <h2 className="text-4xl font-bold text-center text-gray-750 mb-1">
            Create an Account
          </h2>
          <p className="text-base text-center text-gray-700 mb-8">
            Create an account and help us with our field research by providing
            your details and your favorite color. Your participation is valuable
            and will help us personalize the experience. It&apos;s quick and
            completely free!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-6 w-full"
          >
            <Input
              {...register('name')}
              placeholder="Enter your name"
              errorMessage={errors.name?.message}
            />

            <Input
              {...register('email')}
              placeholder="Enter your e-mail"
              errorMessage={errors.email?.message}
            />

            <Input
              {...register('cpf')}
              maxLength={11}
              minLength={11}
              placeholder="Enter your CPF"
              errorMessage={errors.cpf?.message}
            />

            <Controller
              control={control}
              name="color"
              defaultValue=""
              render={({ field: { onChange } }) => (
                <ColorSelect
                  options={[...colorsOptions, ...colorsOptions]}
                  onChange={(val) => onChange((val as ColorOption).value)}
                  errorMessage={errors.color?.message}
                  placeholder="Select your preferred color"
                />
              )}
            />

            <TextArea
              {...register('observation')}
              placeholder="Enter your observation"
              errorMessage={errors.observation?.message}
            />

            <Button type="submit" isLoading={isSubmitting}>
              Register
            </Button>
          </form>
        </Box>
        {errorMessage && (
          <FailedModal
            title="Something went wrong"
            description={errorMessage}
            closeModal={handleCloseFailedModal}
          />
        )}
      </main>
    </>
  )
}

export const getStaticProps = (async () => {
  const colors = await getColors()

  const colorsOptions: ColorOption[] = colors.map((color) => ({
    label: color.name,
    value: color.id,
    hexa: color.hex_value,
  }))

  return { props: { colorsOptions }, revalidate: 60 * 30 }
}) satisfies GetStaticProps<{ colorsOptions: ColorOption[] }>
