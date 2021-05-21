export {}

class Person {
    protected name: string

    constructor(name: string) {
        this.name = name
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }
}

let p1 = new Person("Ann Adams")
p1.greet()

class Employee extends Person {
    constructor(name: string) {
        super(name)
    }
    
    worksOn() {
        console.log(`${this.name} works on many tasks.`)
    }
}
let p2 = new Employee("Mary Smith")
p2.greet()
p2.worksOn()

