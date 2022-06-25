export default class Result {
    static apiMessages = {
        INVALID_PARAMS: new Result(400, 'Invalid Parameters'),
        INVALID_PASSWORD: new Result(401, 'Invalid password'),
        SUCCESS: new Result(200, 'Success'),
        CREATED: new Result(202, 'Created'),
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
