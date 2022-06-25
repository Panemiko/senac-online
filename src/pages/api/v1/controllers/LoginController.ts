import type { NextApiRequest, NextApiResponse } from 'next'
import Result from '../Result'
import CreateUserTokensUseCase from '../use-cases/CreateUserTokensUseCase'
import { validateEmail, validatePassword } from '../validators'
import Controller from './Controller'

export interface LoginRequestBody {
    email: string
    password: string
}

export default class LoginController extends Controller {
    async execute(req: NextApiRequest, res: NextApiResponse<any>) {
        if (req.method !== 'POST') {
            return Controller.sendResult(
                res,
                await Result.getMessageByName('METHOD_NOT_ALLOWED')
            )
        }

        const { email, password } = req.body as LoginRequestBody

        const emailValidation = await validateEmail(email)
        const passwordValidation = await validatePassword(password)

        if (!email || !password || !emailValidation || !passwordValidation)
            return Controller.sendResult(
                res,
                await Result.getMessageByName('INVALID_PARAMS')
            )

        return Controller.handleUseCase(
            res,
            await new CreateUserTokensUseCase().execute(email, password)
        )
    }
}
