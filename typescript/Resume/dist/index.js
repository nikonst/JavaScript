"use strict";
let nums = [1, 2, 3];
nums.forEach(n => {
    console.log(n);
});
let user = ["Nikos", 123];
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function fToC(f = 100) {
    return (f - 32) + 5 / 9;
}
console.log(fToC(50));
console.log(fToC());
