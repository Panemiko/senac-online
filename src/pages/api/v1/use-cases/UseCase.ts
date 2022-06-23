export default abstract class UseCase {
    abstract execute(...params: any): Promise<string | UseCaseReturn>
}

export interface UseCaseReturn {
    messageId: string
    content?: any
}
