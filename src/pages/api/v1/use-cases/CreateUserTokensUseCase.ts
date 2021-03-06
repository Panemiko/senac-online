import UseCase from './UseCase'
import { UserRepository } from '../repositories'
import {
    CompareEncryptedPasswordService,
    CreateAccessTokenService,
    CreateRefreshTokenService,
    SanitizeUserService,
} from '../services'

export default class CreateUserTokensUseCase extends UseCase {
    async execute(email: string, password: string) {
        const userRepository = new UserRepository()
        const compareEncryptedPasswordService =
            new CompareEncryptedPasswordService()
        const createAccessTokenService = new CreateAccessTokenService()
        const createRefreshTokenService = new CreateRefreshTokenService()
        const sanitizedUserService = new SanitizeUserService()

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

        const accessToken = await createAccessTokenService.execute(user.id)
        const refreshToken = await createRefreshTokenService.execute(user.id)
        const sanitizedUser = await sanitizedUserService.execute(user)

        return {
            messageId: 'CREATED',
            content: { accessToken, refreshToken, user: sanitizedUser },
        }
    }
}
