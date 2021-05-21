export {}

function add(x: number, y: number) : number {
    return x + y
}
console.log(add(1,2))

function add2(x: number, y?: number) : number { // y optional parameter
    if (y) {
        return x + y
    } else {
        return x
    }
}
console.log(add2(1)) 

function add3(x: number, y: number = 10) : number { // y default value
    if (y) {
        return x + y
    } else {
        return x
    }
}
console.log(add3(2,2)) 
console.log(add3(1)) 