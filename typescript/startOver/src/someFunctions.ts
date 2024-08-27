import { Person } from "./interfaces"

export const myFun = (x: string) => {
    return x + "!"
}

export const printArray = (ar: number[]) => {
    ar.forEach((a)=> {
        console.log(a)
    })
}

export const printOrPrameters = (p: "car" | "bas") => {
    console.log(p)
}

export const printPerson = (p: Person) => {
    console.log(p.name, " ", p.age)
}

