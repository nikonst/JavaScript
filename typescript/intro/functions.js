"use strict";
exports.__esModule = true;
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function add2(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
console.log(add2(1));
function add3(x, y) {
    if (y === void 0) { y = 10; }
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
console.log(add3(2, 2));
console.log(add3(1));
