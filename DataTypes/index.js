var x = 1
var str = "Hello!"
var a = true
var z

console.log(typeof x, typeof str, typeof a, typeof z)
x = "January"
console.log("x:", typeof x)
x = x + "a"
console.log("x:", x, typeof x)
x[0] = 'q'
console.log("x:", x, typeof x) //no change, strings immutables

let d = f = "Mary"
console.log("d:", d, "f:", f)
d += "Smith"
console.log("d:", d, "f:", f) //f unaffected

var l = 1
var j = "2"
t = l + j
console.log("t", t, typeof t) //string

var k = [1, 2, 3]
console.log(typeof k) //object

var o = {
    name: "Joe",
    sirname: "Doe"
}
console.log(typeof o) //object

var q
q = null
console.log("q:", q, typeof q) //object

const r = () => {
    return r * 2
}
console.log(typeof r) //function
e = r
console.log(typeof e) //function

var y = 20 + 1 + "Alpha"
console.log("y:", y, typeof y) //y: 21Alpha string

somevar = undefined
console.log("somevar:", somevar, typeof somevar) //undefined undefined

g = null
console.log(g, typeof g) //null object

//undefined and null are equal in value but different in type:
console.log(typeof undefined)         // undefined
console.log(typeof null)              // object
console.log(null === undefined)       // false
console.log(null == undefined)        // true
