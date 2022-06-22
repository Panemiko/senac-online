export default class ApiMessage {
    static errors = {
        USER_NOT_FOUND: { code: 100, message: 'aaa' },
    }

    constructor(public code: number, public message: string) {}

    static async getApiMessages() {
        return this.errors.USER_NOT_FOUND
    }

    static async getMessageByName(name: string) {
        return (this.errors as ApiMessageKeyNameAny)[name]
    }
}

export interface ApiMessageKeyNameAny {
    [key: string]: any
}
