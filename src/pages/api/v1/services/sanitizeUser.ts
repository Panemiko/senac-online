import type { User } from '@prisma/client'

export default async function sanitizeUser(
    user: User
): Promise<Omit<User, 'password'>> {
    Reflect.deleteProperty(user, 'password')
    return user
}
