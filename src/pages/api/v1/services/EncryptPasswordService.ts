import bcrypt from 'bcrypt'
import Service from './Service'

export default class EncryptPasswordService extends Service {
    async execute(password: string) {
        return await bcrypt.hash(password, 10)
    }
}
