import type { NextApiRequest, NextApiResponse } from 'next'
import Controller from './Controller'

export class LoginController extends Controller {
    async execute(req: NextApiRequest, res: NextApiResponse<any>) {
        res.status(200).end()
    }
}
