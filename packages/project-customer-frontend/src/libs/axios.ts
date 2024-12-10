import axios from 'axios'

const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  'https://project-customer-monorepo.onrender.com'

export const api = axios.create({
  baseURL: backendUrl,
})
