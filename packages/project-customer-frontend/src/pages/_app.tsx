import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import Layout from '@/components/layout'

import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://project-customer-monorepo-1.onrender.com',
          siteName: 'Favorite Color',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
