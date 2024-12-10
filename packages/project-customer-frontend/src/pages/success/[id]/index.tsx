import { Box } from '@/components/box'
import { CustomerDTO } from '@/dtos/customer-dto'
import { getCustomerById } from '@/http/get-customer-by-id'
import { NextSeo } from 'next-seo'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types'
export default function Success({
  customer,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo title="Success | Favorite Color" />
      <main className="flex items-center justify-center h-screen">
        <Box className="relative">
          <h2 className="text-2xl font-bold text-center text-gray-750 mb-2">
            Thank You for Signing Up, {customer.name}😀
          </h2>
          <p className="text-base text-center text-gray-700">
            Your favorite color has been successfully registered! We appreciate
            your contribution.
          </p>
          <p className="absolute bottom-4 right-4 text-gray-300">John Doe</p>
        </Box>
      </main>
    </>
  )
}

export const getServerSideProps = (async (context) => {
  const { id } = context.params as { id: string }

  const customer = await getCustomerById(id)

  return { props: { customer } }
}) satisfies GetServerSideProps<{ customer: CustomerDTO }>
