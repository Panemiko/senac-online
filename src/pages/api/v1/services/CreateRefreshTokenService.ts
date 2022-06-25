import jwt from 'jsonwebtoken'
import { RefreshTokenRepository } from '../repositories'
import Settings from '../Settings'
import Service from './Service'

export default class CreateRefreshTokenService extends Service {
    async execute(userId: string) {
        const refreshTokenRepository = new RefreshTokenRepository()
        const settings = new Settings()

        const secret = await settings.getRefreshTokenSecret()
        const token = jwt.sign({ userId }, secret || 'token', {
            expiresIn: '30d',
        })

        return await refreshTokenRepository.registerRefreshToken(userId, token)
    }
}
