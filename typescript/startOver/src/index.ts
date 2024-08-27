import { myFun, printArray, printOrPrameters, printPerson } from "./someFunctions"
import { Person } from "./interfaces"
import { Book } from "./classes"

let x = <string>"Some String"

console.log(myFun("Hello"))
printArray([1,2,3])
printOrPrameters("car")

const p: Person = {name: "Maria", age: 45}
printPerson(p)

const b: Book = new Book("ON THE EDGE","Nate Silver")
console.log(b.getBook())


