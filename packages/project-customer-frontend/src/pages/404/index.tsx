import { Box } from '@/components/box'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <NextSeo title="Not Found | Favorite Color" />
      <main className="flex items-center justify-center h-screen">
        <Box className="relative text-center">
          <h2 className="text-4xl font-bold text-gray-750 mb-4">
            404 - Page Not Found
          </h2>
          <p className="text-base text-gray-700 mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved or deleted.
          </p>
          <Link
            href={'/'}
            className="text-blue-500 hover:underline font-medium"
          >
            Go Back to Homepage
          </Link>
        </Box>
      </main>
    </>
  )
}
