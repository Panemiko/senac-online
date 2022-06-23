import Repository from './Repository'
import prisma from '@prismaClient'

export default class UserRepository extends Repository {
    static async getUserById(id: string) {
        return prisma.user.findUnique({
            where: {
                id,
            },
        })
    }

    static async getUserByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email,
            },
        })
    }
}
