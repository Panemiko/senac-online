import UseCase from './UseCase'

export default class CreateUserTokensUseCase extends UseCase {
    async execute(email: string, password: string) {
        return { messageId: 'USER_NOT_FOUND', content: { email, password } }
    }
}
