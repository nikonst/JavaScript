export{}

let greed = () => {
    console.log("Hello")
}
greed()
console.log(typeof greed)

let greed2: Function

greed2 = () => {
    console.log("Hello again")
}
greed2()

let square: Function = (a: number) : void => {
    console.log(a*a)
}
square(4)

const sRoot: Function = (a: number) : number => {
    return Math.sqrt(a)
}

let sqrtX = sRoot(100)
console.log(sqrtX)