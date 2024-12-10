import { Box } from '@/components/box'
import { getColors } from '@/http/get-colors'
import Link from 'next/link'

export default function Custom404() {
  async function teste() {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
    const response = await getColors()
    console.log(response)
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <button onClick={teste}>teste</button>
      <Box className="relative text-center">
        <h2 className="text-4xl font-bold text-gray-750 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-base text-gray-700 mb-6">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved or deleted.
        </p>
        <Link href={'/'} className="text-blue-500 hover:underline font-medium">
          Go Back to Homepage
        </Link>
      </Box>
    </main>
  )
}
