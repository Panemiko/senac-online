import Head from 'next/head'
import React from 'react'

interface PageProps {
    children: string | JSX.Element | JSX.Element[]
    title: string
    description: string
}

export default function Page(props: PageProps) {
    const { children, title, description } = props

    return (
        <>
            <Head>
                <title>{`${title} - Senac Online`}</title>
                <meta name='description' content={description} />
            </Head>
            {children}
        </>
    )
}
