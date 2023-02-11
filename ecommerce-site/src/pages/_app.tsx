import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Sneakers | Ecommerce Site</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <link
                    rel="shortcut icon"
                    href="favicon-32x32.png"
                    type="image/x-icon"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
