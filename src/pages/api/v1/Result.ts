export default class Result {
    static apiMessages = {
        INVALID_PARAMS: new Result(400, 'Invalid Parameters'),
        USER_NOT_FOUND: new Result(401, 'User not found'),
    }

    constructor(
        public code: number,
        public message: string,
        public content?: any
    ) {}

    async setContent(content: any): Promise<void> {
        this.content = content
    }

    async getResultCode(): Promise<number> {
        return this.code
    }

    async getResultMessage(): Promise<string> {
        return this.message
    }

    async getResultContent(): Promise<any> {
        return this.content
    }

    static async getMessageByName(name: string): Promise<Result> {
        return (this.apiMessages as ApiMessageKeyNameAny)[name]
    }
}

export interface ApiMessageKeyNameAny {
    [key: string]: any
}
