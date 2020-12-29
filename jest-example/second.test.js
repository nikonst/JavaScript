import users from './data/data.json'

test('the data are coreect', () => {
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
    
});