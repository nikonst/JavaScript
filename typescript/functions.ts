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