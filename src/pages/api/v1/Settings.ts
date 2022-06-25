import { SettingsRepository } from './repositories'

export default class Settings {
    async getAccessTokenSecret() {
        const settings = await this.getSettings()
        return settings?.accessSecret
    }

    async getRefreshTokenSecret() {
        const settings = await this.getSettings()
        return settings?.refreshSecret
    }

    private async getSettings() {
        const settingsRepository = new SettingsRepository()
        return await settingsRepository.getAppSettings()
    }
}
