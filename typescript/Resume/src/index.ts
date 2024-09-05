// Arrays
let nums: number[] = [1, 2, 3]

nums.forEach(n => {
    console.log(n)
})

//Tuples
let user: [string, number] = ["Nikos", 123]
console.log("user", user)

//Enums
enum Size { Small = 1, Medium = 2, Large = 3 }
let mySize = Size.Medium
console.log("mySize ", mySize)

//Functions
function fToC(f: number = 100): number { //Default value for parameter f
    return (f - 32) + 5 / 9
}

console.log(fToC(50))
console.log(fToC()) // no parameter value

type Person = {
    readonly id: number,
    name: string,
    introduce: () => void
}

let p: Person = {
    id: 1,
    name: "John Doe",
    introduce: () => {
        console.log("Hello")
    }
}

p.introduce()

//Type intersection
type myString = {
    someString: string
}

type myNumber = {
    n: number
}

type myInterType = myString & myNumber

let anInterTyoe: myInterType = {
    someString: "hELLO",
    n: 15
}

console.log("anInterTyoe ", anInterTyoe)

//Literal types
type Quantiy = 50 | 100

let q: Quantiy = 100

console.log("Literal type variable ", q)

//Nulable types
function greed(name: string | null | undefined) {
    if(name) {
        console.log(name.toUpperCase())
    } else {
        console.log("NONAME")
    }
    
}
// greed(null) ERROR, can be updated in tsconfig

greed("jane")
greed(null)
