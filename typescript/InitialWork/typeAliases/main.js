"use strict";
exports.__esModule = true;
var greet = function (name, age) {
    console.log("Hello ", name, " at ", age, " years old!");
};
var greetAgain = function (name, age) {
    console.log("Hello Again ", name, " at ", age, " years old!");
};
var greetAgainAgain = function (obj) {
    console.log("Hello Again Again", obj.name, " at ", obj.age, " years old!");
};
greet(["John", "Jim"], 20);
greetAgain("Ann", "twenty one");
greetAgainAgain({ name: "Helen", age: "twenty one" }); //?? string "twenty one" passes
