import type { FieldValues } from 'react-hook-form'
import type { AxiosError } from 'axios'
import React from 'react'
import Link from 'next/link'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { styled } from '@styles/stitches.config'
import Page from '@components/Page'
import Heading from '@components/Heading'
import TextInput from '@components/TextInput'
import ButtonLink from '@components/ButtonLink'
import Button from '@components/Button'
import Icon from '@components/Icon'
import useApi from '@hooks/useApi'

const Container = styled('main', {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const FormContainer = styled('form', {
    width: '420px',
    paddingY: '$11',
    paddingX: '$8',
    borderRadius: '$4',
    background: '$backgroundMedium',
    textAlign: 'center',
})

const FormStatus = styled('span', {
    color: '$dangerLow',
})

interface FormData {
    email: string
    password: string
}

export default function Register() {
    const { register, handleSubmit } = useForm()
    const [status, setStatus] = React.useState('')
    const api = useApi()

    async function login(data: FieldValues) {
        const formData = data as FormData

        api.post('/login', { ...formData })
            .then((response) => {
                setStatus('')
                alert(`Logado como ${response.data.content.user.name}`)
            })
            .catch((err: AxiosError) => {
                const response = err.response?.data as any

                if (err.response?.status === 500)
                    return setStatus(
                        'Ocorreu um erro interno. Tente novamente mais tarde.'
                    )

                if (
                    response.message === 'Invalid Parameters' ||
                    response.message === 'Invalid password'
                ) {
                    setStatus('Senha incorreta')
                }
            })
    }

    return (
        <Page title='Entrar' description='Entrar no Senac Online'>
            <Container>
                <FormContainer onSubmit={handleSubmit(login)}>
                    <Heading as={'h2' as any} variant='tertiary'>
                        Entrar
                    </Heading>
                    <Heading css={{ marginBottom: '$8' }} variant='primary'>
                        Senac Online
                    </Heading>
                    <TextInput
                        css={{ marginBottom: '$7' }}
                        type='email'
                        required
                        {...register('email')}
                        autoComplete='off'
                        placeholder='E-mail'
                    />
                    <TextInput
                        css={{ marginBottom: '$7' }}
                        type='password'
                        required
                        {...register('password')}
                        autoComplete='off'
                        placeholder='Senha'
                    />
                    <FormStatus css={{ marginBottom: '$8', display: 'block' }}>
                        {status}
                    </FormStatus>
                    <Link href='#'>
                        <ButtonLink
                            css={{ marginBottom: '$7', display: 'block' }}
                        >
                            Esqueceu sua senha?
                        </ButtonLink>
                    </Link>
                    <Button
                        as={'input' as any}
                        type='submit'
                        value='Entrar'
                        css={{ marginBottom: '$8' }}
                    />
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
