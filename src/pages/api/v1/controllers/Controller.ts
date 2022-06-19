import type { NextApiRequest, NextApiResponse } from 'next'

export default abstract class Controller {
    abstract execute(req: NextApiRequest, res: NextApiResponse<any>): any
}
