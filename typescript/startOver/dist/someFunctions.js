"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPerson = exports.printOrPrameters = exports.printArray = exports.myFun = void 0;
var myFun = function (x) {
    return x + "!";
};
exports.myFun = myFun;
var printArray = function (ar) {
    ar.forEach(function (a) {
        console.log(a);
    });
};
exports.printArray = printArray;
var printOrPrameters = function (p) {
    console.log(p);
};
exports.printOrPrameters = printOrPrameters;
var printPerson = function (p) {
    console.log(p.name, " ", p.age);
};
exports.printPerson = printPerson;
