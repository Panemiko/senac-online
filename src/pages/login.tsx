import React from 'react'
import { styled } from '@styles/stitches.config'
import Page from '@components/Page'
import Heading from '@components/Heading'

const Container = styled('main', {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const FormContainer = styled('div', {
    paddingY: '$11',
    paddingX: '$8',
    borderRadius: '$4 0 0 $4',
    background: '$backgroundMedium',
    textAlign: 'center',
})

export default function Register() {
    return (
        <Page title='Entrar' description='Entrar no Senac Online'>
            <Container>
                <FormContainer>
                    <Heading as={'h2' as any} variant='tertiary'>
                        Entrar
                    </Heading>
                    <Heading variant='primary'>Senac Online</Heading>
                </FormContainer>
            </Container>
        </Page>
    )
}
