import bcrypt from 'bcrypt'
import Service from './Service'

export default class CompareEncryptedPasswordService extends Service {
    async execute(passwordEncrypted: string, passwordToCompare: string) {
        return await bcrypt.compare(passwordToCompare, passwordEncrypted)
    }
}
