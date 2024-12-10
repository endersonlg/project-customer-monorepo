import axios from 'axios'

const backendUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://project-customer-monorepo.onrender.com'
    : process.env.NEXT_PUBLIC_BACKEND_URL

export const api = axios.create({
  baseURL: backendUrl,
})
