import { createCustomer } from '@/http/create-customer'
import { AxiosError } from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time))
}

type ErrorData = {
  message: string | string[]
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    await sleep(4000)

    const { name, email, cpf, preferred_color_id, observation } = req.body

    const response = await createCustomer({
      name,
      email,
      cpf,
      preferred_color_id,
      observation,
    })

    res.status(response.status).json(response.data)
  } catch (e) {
    const error = e as AxiosError<ErrorData>

    let messageError = 'Unexpected error occurred'

    if (Array.isArray(error.response?.data.message)) {
      messageError = error.response?.data.message.toString()
    }

    if (typeof error.response?.data.message === 'string') {
      messageError = error.response?.data.message
    }

    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: messageError })
  }
}
