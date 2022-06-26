import type { User } from '@prisma/client'
import { UserRepository } from '../repositories'
import {
    CreateAccessTokenService,
    CreateRefreshTokenService,
    SanitizeUserService,
    UseRefreshTokenService,
} from '../services'
import UseCase from './UseCase'

export default class CreateAccessTokenUseCase extends UseCase {
    async execute(refreshToken: string) {
        const userRepository = new UserRepository()
        const createAccessTokenService = new CreateAccessTokenService()
        const createRefreshTokenService = new CreateRefreshTokenService()
        const sanitizeUserService = new SanitizeUserService()
        const useRefreshTokenService = new UseRefreshTokenService()

        const userId = await useRefreshTokenService.execute(refreshToken)

        if (!userId) {
            return { messageId: 'UNAUTHORIZED' }
        }

        const generatedAccessToken = await createAccessTokenService.execute(
            userId
        )
        const generatedRefreshToken = await createRefreshTokenService.execute(
            userId
        )

        const user = await userRepository.getUserById(userId)
        const sanitizedUser = await sanitizeUserService.execute(user as User)

        return {
            messageId: 'CREATED',
            content: {
                accessToken: generatedAccessToken,
                refreshToken: generatedRefreshToken,
                user: sanitizedUser,
            },
        }
    }
}
