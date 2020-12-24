const getRandomInt = require("./helpers/getRandomInt")

let aSet = new Set()

for (let i = 0; i <= 10; i++) {
    aSet.add(getRandomInt.getRandomInt(0, 10))
}
console.log("aSet: ", aSet, " Set size: ", aSet.size)

for (let i = 0; i <= 10; i++) {
    console.log(aSet.has(i))
}

for (let item of aSet) {
    console.log("Squared: ", item * item)
}

for (let item of aSet.keys()) {
    console.log("Item key: ", item)
}

for (let item of aSet.values()) {
    console.log("Item value: ", item)
}

// ---------------------------------
const bSet = new Set([1, 2, 3, 4, 4])
const anArray = [...bSet]
console.log(typeof bSet, " ", bSet)
console.log(typeof anArray, " ", anArray)

// ---------------------------------
const set1 = new Set([1, 2, 3, 4])
const set2 = new Set([1, 2, 5, 6])
console.log(set1, set2)
let intersection = new Set([...set1].filter(x => (set2.has(x))))
console.log("intersection: ", intersection)
let union = new Set([...set1, ...set2])
console.log("union: ", union)

// ---------------------------------
const isSuperset = (set, subset) => { 
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}
const set3 = new Set([1, 2, 3])
const set4 = new Set([1, 2, 3, 4, 5, 6])
console.log(isSuperset(set3,set4))
console.log(isSuperset(set4,set3))
