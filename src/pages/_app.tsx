import type { AppProps } from 'next/app'
import React from 'react'
import getStyles from '@styles/global'

export default function App({ Component, pageProps }: AppProps) {
    getStyles()
    return <Component {...pageProps} />
}
