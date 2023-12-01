import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics/>
    </Layout>
  )
}
