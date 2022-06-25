import UseCase from './UseCase'
import { UserRepository } from '../repositories'
import {
    CompareEncryptedPasswordService,
    CreateRefreshTokenService,
} from '../services'

export default class CreateUserTokensUseCase extends UseCase {
    async execute(email: string, password: string) {
        const userRepository = new UserRepository()
        const compareEncryptedPasswordService =
            new CompareEncryptedPasswordService()
        const createRefreshTokenService = new CreateRefreshTokenService()

        const user = await userRepository.getUserByEmail(email)

        if (
            !user ||
            !(await compareEncryptedPasswordService.execute(
                user.password,
                password
            ))
        ) {
            return { messageId: 'INVALID_PASSWORD' }
        }

        const refreshToken = await createRefreshTokenService.execute(user.id)

        return {
            messageId: 'CREATED',
            content: { refreshToken: refreshToken.token },
        }
    }
}
