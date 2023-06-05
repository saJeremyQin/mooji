import 'styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
