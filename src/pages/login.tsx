import React from 'react'
import Link from 'next/link'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'
import { styled } from '@styles/stitches.config'
import Page from '@components/Page'
import Heading from '@components/Heading'
import TextInput from '@components/TextInput'
import ButtonLink from '@components/ButtonLink'
import Button from '@components/Button'
import Icon from '@components/Icon'

const Container = styled('main', {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const FormContainer = styled('div', {
    width: '420px',
    paddingY: '$11',
    paddingX: '$8',
    borderRadius: '$4',
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
                    <Heading css={{ marginBottom: '$8' }} variant='primary'>
                        Senac Online
                    </Heading>
                    <TextInput
                        css={{ marginBottom: '$7' }}
                        type='email'
                        autoComplete='off'
                        placeholder='E-mail'
                    />
                    <TextInput
                        css={{ marginBottom: '$8' }}
                        type='password'
                        autoComplete='off'
                        placeholder='Senha'
                    />
                    <Link href='#'>
                        <ButtonLink>Esqueceu sua senha?</ButtonLink>
                    </Link>
                    <br />
                    <Button css={{ marginTop: '$7', marginBottom: '$8' }}>
                        Entrar
                    </Button>
                    <br />
                    <Icon
                        target='_blank'
                        href='https://github.com/panemiko/senac-online'
                    >
                        <GithubIcon />
                    </Icon>
                </FormContainer>
            </Container>
        </Page>
    )
}
