export {}

type StringOrArrayOfStrings = string | Array<string>
type StringOrNumber = string | number
type objPerson = {name: string, age: number}

let greet: Function = (name: StringOrArrayOfStrings, age: StringOrNumber) :void => {
    console.log("Hello ", name, " at ", age , " years old!")
}

let greetAgain: Function = (name: StringOrArrayOfStrings, age: StringOrNumber) :void => {
    console.log("Hello Again ", name, " at ", age , " years old!")
}

let greetAgainAgain: Function = (obj: objPerson) :void => {
    console.log("Hello Again Again", obj.name, " at ", obj.age , " years old!")
}

greet(["John", "Jim"], 20)
greetAgain("Ann", "twenty one")
greetAgainAgain({name: "Helen", age:"twenty one"}) //?? string "twenty one" passes
