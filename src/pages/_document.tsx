import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@styles/stitches.config'

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='pt'>
                <Head>
                    <style
                        id='stitches'
                        dangerouslySetInnerHTML={{ __html: getCssText() }}
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='annonymous'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
                        rel='stylesheet'
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
