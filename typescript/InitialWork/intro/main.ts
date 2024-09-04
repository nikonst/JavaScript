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

let p1: [ string, number ] = ["Sam", 12] // tuple, fixed dimension
console.log(p1)

//union types
let p2: (string | number)[]= ["Sam", 12, "Sue", 45, "Helen"] // mixed types in array
console.log(p2)

let p3: any[] = []
p3.push("italy", 11, "france", true)
console.log(p3)

let mixed = ["ome", 2, true]
// mixed = 100 ERROR, change of type
console.log("mixed: ", mixed)
mixed.push("five")
console.log("mixed: ", mixed)
mixed[0] = 1
console.log("mixed: ", mixed)

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

let anObj: {
    attr1: string,
    attr2: number
}

anObj = {attr1:"hello", attr2: 12}
console.log(anObj)