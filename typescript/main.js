"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var aFlag = true;
console.log(aFlag);
var aNumber = 10;
console.log(aNumber);
var aString = "Paris";
console.log(aString);
var bString = "Hello\n" + aString;
console.log(bString);
var n = null;
var u = undefined;
//works fine:
var x = null;
var y = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var p1 = ["Sam", 12]; // tuple, fixed dimension
console.log(p1);
//union types
var p2 = ["Sam", 12, "Sue", 45, "Helen"]; // mixed types in array
console.log(p2);
var mixed = ["ome", 2, true];
// mixed = 100 ERROR, change of type
console.log("mixed: ", mixed);
mixed.push("five");
console.log("mixed: ", mixed);
mixed[0] = 1;
console.log("mixed: ", mixed);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {})); // assign enum value to strings
var c = Color.red;
console.log(c); // 0
var Cars;
(function (Cars) {
    Cars[Cars["fiat"] = 5] = "fiat";
    Cars[Cars["ford"] = 6] = "ford";
    Cars[Cars["citroen"] = 7] = "citroen";
})(Cars || (Cars = {}));
var car = Cars.ford;
console.log(car); // 6
var randomValue;
randomValue = 1;
randomValue = true;
randomValue = 'Pizza';
randomValue = [0, 1, 2, 3];
var multitype;
multitype = 1;
console.log(multitype);
multitype = true;
console.log(multitype);
// multitype = 'Hello' ERROR
var anObj;
anObj = { attr1: "hello", attr2: 12 };
console.log(anObj);
