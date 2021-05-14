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
