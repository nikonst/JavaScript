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
