export {}

interface Person {
    firstName: string,
    lastName?: string
}

function printFullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

printFullName({firstName:'Joe', lastName:'Doe'})
printFullName({firstName:'Mary'})