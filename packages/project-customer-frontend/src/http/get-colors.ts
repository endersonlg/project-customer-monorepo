import { api } from '@/libs/axios'

interface Color {
  id: string
  name: string
  hex_value: string
}
export async function getColors() {
  const response = await api.get<Color[]>('/colors')
  return response.data
}
