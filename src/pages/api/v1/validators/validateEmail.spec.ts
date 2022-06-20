import validateEmail from './validateEmail'

test('Email validation', async () => {
    expect(await validateEmail('example@example.com')).toBeTruthy()
    expect(await validateEmail('')).toBeFalsy()
    expect(await validateEmail('example')).toBeFalsy()
    expect(await validateEmail('example.com')).toBeFalsy()
    expect(await validateEmail('@example.com')).toBeFalsy()
})
