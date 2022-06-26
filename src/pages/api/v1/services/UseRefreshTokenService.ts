import jwt from 'jsonwebtoken'
import { RefreshTokenRepository } from '../repositories'
import Settings from '../Settings'
import Service from './Service'

export default class UseRefreshTokenService extends Service {
    async execute(refreshToken: string) {
        const refreshTokenRepository = new RefreshTokenRepository()
        const settings = new Settings()

        const secret = await settings.getRefreshTokenSecret()

        const token = await refreshTokenRepository.getRefreshTokenByToken(
            refreshToken
        )

        if (!token) return null

        try {
            jwt.verify(token.token, secret || 'token')
        } catch (err) {
            return null
        }

        await refreshTokenRepository.deleteRefreshTokenById(token.id)

        return token.userId
    }
}
