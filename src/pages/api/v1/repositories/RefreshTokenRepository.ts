import Repository from './Repository'
import prisma from '@prismaClient'

export default class UserRepository extends Repository {
    async getRefreshTokenById(id: string) {
        return prisma.refreshToken.findUnique({
            where: {
                id,
            },
        })
    }

    async getRefreshTokenByToken(token: string) {
        return prisma.refreshToken.findUnique({
            where: {
                token,
            },
        })
    }

    async registerRefreshToken(userId: string, token: string) {
        return await prisma.refreshToken.create({
            data: {
                user: {
                    connect: {
                        id: userId,
                    },
                },
                token,
            },
        })
    }
}
