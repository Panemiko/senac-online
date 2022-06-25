import type { FormEvent, FormEventHandler } from 'react'
import React from 'react'
import Link from 'next/link'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'
import type { FieldValues } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { validateEmail, validatePassword } from '@api/v1/validators'
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

interface FormData {
    email: string
    password: string
}

export default function Register() {
    const { register, handleSubmit } = useForm()
    const api = useApi()

    async function login(data: FieldValues) {
        const formData = data as FormData

        console.log(await api.post('/login', { ...data }))
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
                        css={{ marginBottom: '$8' }}
                        type='password'
                        required
                        {...register('password')}
                        autoComplete='off'
                        placeholder='Senha'
                    />
                    <Link href='#'>
                        <ButtonLink>Esqueceu sua senha?</ButtonLink>
                    </Link>
                    <br />
                    <p>{status}</p>
                    <Button
                        as={'input' as any}
                        type='submit'
                        value='Entrar'
                        css={{ marginTop: '$7', marginBottom: '$8' }}
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
