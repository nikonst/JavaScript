"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const someFunctions_1 = require("./someFunctions");
const classes_1 = require("./classes");
let x = "Some String";
console.log((0, someFunctions_1.myFun)("Hello"));
(0, someFunctions_1.printArray)([1, 2, 3]);
(0, someFunctions_1.printOrPrameters)("car");
const p = { name: "Maria", age: 45 };
(0, someFunctions_1.printPerson)(p);
const b = new classes_1.Book("ON THE EDGE", "Nate Silver");
console.log(b.getBook());
const root = document.getElementById("root");
root.innerHTML = b.getBook();
