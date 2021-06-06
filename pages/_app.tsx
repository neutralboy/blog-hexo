import 'tailwindcss/tailwind.css'
import Head from "next/head";

import Header from "../components/Header";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Noto+Sans+JP&family=Roboto:wght@700&display=swap" rel="stylesheet" /> 
        <link href="/index.css" rel="stylesheet" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#4f46e5" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/poorna/image/upload/v1622972701/my-blog/logo/Screenshot_2021-06-06_at_15-14-35_Home_Poorna_s_Blog.png"/>
    </Head>
    <div className="font-sans bg-gray-900">
        <Header />
        <Component {...pageProps} />
    </div>

    </>
  )
}
export default MyApp
