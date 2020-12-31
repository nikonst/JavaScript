class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }

    carStats() {
        return `This car has ${this.doors} doors, ${this.engine} engine and ${this.color} color`
    }

    static totalDoors(c1, c2) {
        const doors1 = c1.doors
        const doors2 = c2.doors
        return doors1 + doors2
    }
}

const csx5 = new Car(5, 'v6', 'blue')
const suv1 = new Car(5, 'v8', 'red')

console.log(csx5)
console.log(csx5.doors)
console.log(csx5.carStats())
console.log(Car.totalDoors(csx5, suv1))

//mixin
let mixin = {
    livesIn(country) {
        console.log(`The person lives in ${country}`)
    }
}

let personMixin = {
    __proto__: mixin,
    livesIn(country) {
        super.livesIn(country)
    }
}
class Person {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }

    getPersonData() {
        return { name: this.name, suurname: this.surname, age: this.age }
    }
}

class Teacher extends Person {
    constructor(name, surname, age, topic) {
        super(name, surname, age)
        this.topic = topic
        Object.assign(this, personMixin)
    }
    //Function Overload
    /* getPersonData() {
        return "HELLO"
    } */
    getTeacherData() {
        return { name: this.name, suurname: this.surname, age: this.age, topic: this.topic }
    }
}

p1 = new Person('Ann', 'Smith', 23)
console.log(p1.getPersonData())

t1 = new Teacher('Mary', 'Jones', '33', 'Science')
console.log(t1.getPersonData())
console.log(t1.getTeacherData())
t1.livesIn("UK")
t1.livesIn("France")
