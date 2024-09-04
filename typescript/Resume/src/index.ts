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

