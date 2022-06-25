import jwt from 'jsonwebtoken'
import Settings from '../Settings'
import Service from './Service'

export default class CreateAccessTokenService extends Service {
    async execute(userId: string) {
        const settings = new Settings()

        const secret = await settings.getAccessTokenSecret()
        const token = jwt.sign({ userId }, secret || 'token', {
            expiresIn: '30m',
        })

        return token
    }
}
