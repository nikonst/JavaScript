import { myFun, printArray, printOrPrameters, printPerson } from "./someFunctions"
import { Person } from "./interfaces"

let x = <string>"Some String"

console.log(myFun("Hello"))
printArray([1,2,3])
printOrPrameters("car")

const p: Person = {name: "Maria", age: 45}
printPerson(p)



