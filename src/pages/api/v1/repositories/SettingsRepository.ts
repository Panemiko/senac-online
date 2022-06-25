import Repository from './Repository'
import prisma from '@prismaClient'

export default class SettingsRepository extends Repository {
    async getAppSettings() {
        return await prisma.settings.findFirst()
    }
}
