export {}

let message = "Hello World"
console.log(message)

let aFlag : boolean = true
console.log(aFlag)
let aNumber: number = 10
console.log(aNumber)
let aString: string = "Paris"
console.log(aString)
let bString: string = `Hello
${aString}`
console.log(bString)

let n : null = null
let u : undefined = undefined

//works fine:
let x : boolean = null
let y : string = undefined

let list1: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let p1: [ string, number] = ["Sam", 12] // tuple, fixed dimension
console.log(p1)

enum Color {red, blue, yellow} // assign enum value to strings
let c: Color = Color.red
console.log(c) // 0

enum Cars {fiat = 5, ford, citroen}
let car: Cars = Cars.ford
console.log(car) // 6

let randomValue: any
randomValue = 1
randomValue = true
randomValue = 'Pizza'
randomValue = [0,1,2,3]

let multitype: number | boolean
multitype = 1
console.log(multitype)
multitype = true
console.log(multitype)
// multitype = 'Hello' ERROR