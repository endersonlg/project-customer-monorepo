import { CustomerDTO } from '@/dtos/customer-dto'
import { api } from '@/libs/axios'

export async function getCustomerById(id: string) {
  const response = await api.get<CustomerDTO>(`customers/${id}`)
  return response.data
}
