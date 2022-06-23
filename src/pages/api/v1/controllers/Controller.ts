import type { NextApiRequest, NextApiResponse } from 'next'
import Result from '../Result'
import type { UseCaseReturn } from '../use-cases/UseCase'

export default abstract class Controller {
    abstract execute(req: NextApiRequest, res: NextApiResponse<any>): any

    static async handleUseCase(
        res: NextApiResponse,
        resultUseCase: UseCaseReturn
    ) {
        const result = await Result.getMessageByName(resultUseCase.messageId)
        await result.setContent(resultUseCase.content)

        return await this.sendResult(res, result)
    }

    static async sendResult(res: NextApiResponse, result: Result) {
        return res.status(await result.getResultCode()).json({
            message: await result.getResultMessage(),
            content: (await result.getResultContent()) || undefined,
        })
    }
}
