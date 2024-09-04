// Arrays
let nums: number[]  = [1,2,3]

nums.forEach(n => {
    console.log(n)
})

//Tuples
let user: [string, number] = ["Nikos", 123]
console.log(user)

//Enums
enum Size {Small = 1, Medium = 2, Large = 3}
let mySize = Size.Medium
console.log(mySize)

//Functions
function fToC(f: number = 100): number { //Default value for parameter f
    return (f-32)+5/9
}

console.log(fToC(50))
console.log(fToC()) // no parameter value