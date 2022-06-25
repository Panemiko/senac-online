import Repository from './Repository'
import prisma from '@prismaClient'

export default class UserRepository extends Repository {
    async getUserById(id: string) {
        return prisma.user.findUnique({
            where: {
                id,
            },
        })
    }

    async getUserByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        })
    }
}
