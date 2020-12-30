import users from './data/data.json'

test('the data are corect', () => {
    expect(users).toMatchSnapshot()
    expect(users).toHaveLength(28)
})

users.forEach(element => {
    test('element should have properties id, name, surname, email, country', () => {
        expect(element).toHaveProperty('id')
        expect(element).toHaveProperty('name')
        expect(element).toHaveProperty('surname')
        expect(element).toHaveProperty('email')
        expect(element).toHaveProperty('country')
    })
})

test('Spying on function original implementation...', () => {
    const user = {
        name: str => `User name ${str}`
    }
    const spy = jest.spyOn(user, 'name')
    expect(user.name('Taylor')).toBe('User name Taylor')
    expect(spy).toHaveBeenCalledWith('Taylor')
})

test('Spying on function mock implementation...', () => {
    const user = {
        name: str => `User name ${str}`
    }
    const spy = jest.spyOn(user, 'name')
    spy.mockImplementation(str => `Hello ${str}`)
    expect(user.name('Taylor')).toBe('Hello Taylor')
    spy.mockRestore()
    expect(user.name('Taylor')).toBe('User name Taylor')
})

test('Match data', () => {
    const fourthUser = {
        "id": "16300714-1769",
        "name": "Zenia",
        "surname": "Sampson",
        "email": "consectetuer@incursus.edu",
        "country": "Guinea-Bissau"
    }
    expect(users[3]).toMatchObject(fourthUser)
})

test('Expect a Promise to resolve', async () => {
    const user = {
        getName: jest.fn(() => Promise.resolve('John Smith'))
    }
    await expect(user.getName()).resolves.toBe('John Smith')
})

test('Expect a Promise to reject', async () => {
    const user = {
        getName: jest.fn(() => Promise.reject(new Error('An error occured')))
    }
    await expect(user.getName()).rejects.toThrow('An error occured')
})
