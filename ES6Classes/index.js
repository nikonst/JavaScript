class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }

    carStats() {
        return `This car has ${this.doors} doors, ${this.engine} engine and ${this.color} color`
    }
}

const csx5 =  new Car(5, 'v6', 'blue')

console.log(csx5)
console.log(csx5.doors)
console.log(csx5.carStats())