import type { NextApiRequest, NextApiResponse } from 'next'
import Result from '../Result'
import { CreateAccessTokenUseCase } from '../use-cases'
import Controller from './Controller'

export default class AccessController extends Controller {
    async execute(req: NextApiRequest, res: NextApiResponse<any>) {
        if (req.method !== 'POST') {
            return Controller.sendResult(
                res,
                await Result.getMessageByName('METHOD_NOT_ALLOWED')
            )
        }

        const refreshToken = req.headers.authorization?.replace('Bearer ', '')

        if (!refreshToken) {
            return Controller.sendResult(
                res,
                await Result.getMessageByName('UNAUTHORIZED')
            )
        }

        return Controller.handleUseCase(
            res,
            await new CreateAccessTokenUseCase().execute(refreshToken)
        )
    }
}
