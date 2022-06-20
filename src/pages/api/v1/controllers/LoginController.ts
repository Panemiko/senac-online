import type { NextApiRequest, NextApiResponse } from 'next'
import { validateEmail, validatePassword } from '../validators'
import Controller from './Controller'

export interface LoginRequestBody {
    email: string
    password: string
}

export default class LoginController extends Controller {
    async execute(req: NextApiRequest, res: NextApiResponse<any>) {
        if (req.method !== 'POST') return res.status(403).end()

        const { email, password } = req.body as LoginRequestBody

        const emailValidation = await validateEmail(email)
        const passwordValidation = await validatePassword(password)

        if (!email || !password || !emailValidation || !passwordValidation)
            return res.status(400).end()

        return res.status(200).end()
    }
}
