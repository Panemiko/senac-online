export default async function validatePassword(password: string) {
    return password.length > 6 && password.length < 32
}
