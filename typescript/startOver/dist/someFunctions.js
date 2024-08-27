"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPerson = exports.printOrPrameters = exports.printArray = exports.myFun = void 0;
const myFun = (x) => {
    return x + "!";
};
exports.myFun = myFun;
const printArray = (ar) => {
    ar.forEach((a) => {
        console.log(a);
    });
};
exports.printArray = printArray;
const printOrPrameters = (p) => {
    console.log(p);
};
exports.printOrPrameters = printOrPrameters;
const printPerson = (p) => {
    console.log(p.name, " ", p.age);
};
exports.printPerson = printPerson;
