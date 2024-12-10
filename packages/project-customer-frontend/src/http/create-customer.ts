import { CustomerDTO } from '@/dtos/customer-dto'
import { api } from '@/libs/axios'

type CreateCustomerRequest = {
  name: string
  cpf: string
  email: string
  preferred_color_id: string
  observation: string
}

export async function createCustomer(data: CreateCustomerRequest) {
  return await api.post<CustomerDTO>('/customers', data)
}
