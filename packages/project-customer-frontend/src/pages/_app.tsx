import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import Layout from '@/components/layout'

import '../styles/globals.css'

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
