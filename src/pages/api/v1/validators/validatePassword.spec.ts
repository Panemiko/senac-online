import validatePassword from './validatePassword'

test('Password validation', async () => {
    expect(await validatePassword('example')).toBeTruthy()
    expect(await validatePassword('')).toBeFalsy()
    expect(await validatePassword('examp')).toBeFalsy()
    expect(
        await validatePassword('example example example example example')
    ).toBeFalsy()
})
