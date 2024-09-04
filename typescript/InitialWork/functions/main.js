"use strict";
exports.__esModule = true;
var greed = function () {
    console.log("Hello");
};
greed();
console.log(typeof greed);
var greed2;
greed2 = function () {
    console.log("Hello again");
};
greed2();
var square = function (a) {
    console.log(a * a);
};
square(4);
var sRoot = function (a) {
    return Math.sqrt(a);
};
var sqrtX = sRoot(100);
console.log(sqrtX);
