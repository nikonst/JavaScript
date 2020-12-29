class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    getPerson = () => {
        return { name: this.name, surname: this.surname }
    }
}

export { Person }