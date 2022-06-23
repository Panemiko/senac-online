import type { User } from '@prisma/client'
import Service from './Service'

export default class SanitizeUserService extends Service {
    async execute(user: User): Promise<Omit<User, 'password'>> {
        Reflect.deleteProperty(user, 'password')
        return user
    }
}
