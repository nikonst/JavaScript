const getRandomInt = require("./helpers/getRandomInt")

var a = []

for (let i = 0; i < 10; i++) {
    a.push(getRandomInt.getRandomInt(0, 100))
}

console.log("a:", a, "\na length:", a.length, "\n type of a:", typeof a)
console.log(Array.isArray(a)) //true
console.log(a instanceof Array) //true

var sa = a.sort()
console.log(sa) //String sort

console.log(typeof a[0]) //number

//
var d = [1, 2, "Foo"]
console.log(d)
//

//ARRAY METHODS
var cities = ["Madird", "Paris", "Rome", "Athens"]
console.log(cities)

c = cities.pop() //removes last element
console.log(c, cities)

cities.push("Berlin")
console.log(cities)

d = cities.shift() //removes first element
console.log(d, cities)

cities.unshift("Brussels") //adds element at the begining
console.log(cities)

delete (cities[1]) // deletes element, leaves undefined element 
console.log(cities)

cities[1] = "Oslo"
console.log(cities)

cities.splice(2, 1, "Bern", "London")
console.log(cities)

cities.splice(0, 1) //remove without leaving undefined element
console.log(cities)

a1 = ["One", "Two"]
a2 = ["Three", "Four"]
a3 = ["Five"]
numberStrs = a1.concat(a2, a3)
console.log(numberStrs)

console.log(cities)
sliceCities = cities.slice(1, 3)
console.log(cities) //not changed with slice
console.log(sliceCities) //new array

//LOOPS
//simple loop
a.forEach((e, i) => {
    console.log(i, "&&&", e)
})

//map returns an array
doubles = a.map((el, i) => {
    console.log("i:", i)
    return 2 * el
})
console.log("doubles", doubles)

//The filter() method creates a new array with array 
//elements that passes a test.
above50 = a.filter((el) => {
    return el > 50
})
console.log(above50)

//The reduce() method runs a function on each array element
//to produce (reduce it to) a single value.
sum = a.reduce((s, el) => {
    return s + el
})
console.log("sum:", sum)

//The every() method check if all array values pass a test.
negative = a.every(el => {
    return el < 0
})
console.log(negative) //false

//The some() method check if some array values pass a test.
greaterThan70 = a.some(el => {
    return el > 70
})
console.log(greaterThan70)

//The find() method returns the value of the first array element
//that passes a test function.
findGreaterThan30 = a.find(el => {
    return el > 30
})
console.log(findGreaterThan30)

//The findIndex() method returns the index of the first
//array element that passes a test function.
findGreaterThan30Index = a.findIndex(el => {
    return el > 30
})
console.log(findGreaterThan30Index)

//ARRAY OF OBJECTS
const aObjects = [{
    "id": 1,
    "first_name": "Wake",
    "last_name": "Oldacres",
    "email": "woldacres0@amazon.co.uk",
    "gender": "Male",
    "height": 191
}, {
    "id": 2,
    "first_name": "Lisabeth",
    "last_name": "Vlasenko",
    "email": "lvlasenko1@nih.gov",
    "gender": "Female",
    "height": 214
}, {
    "id": 3,
    "first_name": "Mora",
    "last_name": "Roaf",
    "email": "mroaf2@economist.com",
    "gender": "Female",
    "height": 175
}, {
    "id": 4,
    "first_name": "Norina",
    "last_name": "Beardsell",
    "email": "nbeardsell3@blogtalkradio.com",
    "gender": "Female",
    "height": 184
}, {
    "id": 5,
    "first_name": "Waly",
    "last_name": "Sheddan",
    "email": "wsheddan4@hhs.gov",
    "gender": "Female",
    "height": 176
}, {
    "id": 6,
    "first_name": "Ralf",
    "last_name": "Wittman",
    "email": "rwittman5@yale.edu",
    "gender": "Male",
    "height": 175
}, {
    "id": 7,
    "first_name": "Joe",
    "last_name": "Andrejs",
    "email": "jandrejs6@webs.com",
    "gender": "Male",
    "height": 184
}, {
    "id": 8,
    "first_name": "Pancho",
    "last_name": "Odam",
    "email": "podam7@mac.com",
    "gender": "Male",
    "height": 182
}, {
    "id": 9,
    "first_name": "Peterus",
    "last_name": "Keach",
    "email": "pkeach8@wordpress.com",
    "gender": "Male",
    "height": 218
}, {
    "id": 10,
    "first_name": "Melesa",
    "last_name": "Want",
    "email": "mwant9@fda.gov",
    "gender": "Female",
    "height": 198
}]

sumHeights = aObjects.reduce((s, item) => {
    return s += item.height
}, 0)
heightAvg = sumHeights / aObjects.length
console.log("Average Height:", heightAvg)

//flat()
let nums = [1,2,3,[4,5]]
console.log(nums)
nums.flat() // wont't change nums itself
console.log(nums.flat())

//fill
let nums2 = [1,2,3,4,5]
nums2.fill(0,1,3)
console.log(nums2)

// splice()
/* The splice() method changes the contents of an array by
removing or replacing existing elements and/or adding new elements in place.
 */
let instruments  = ["guitar", "bass", "drums", "sax"]
console.log(instruments)
instruments.splice(0, 0,  "cello")
console.log(instruments)
instruments.splice(2, 1,  "congas")
console.log(instruments)
instruments.splice(1, 2,  "percussion", "violin", "piano")
console.log(instruments)

// slice()
/* The slice() method returns a shallow copy of a portion of an array into a new
array object selected from start to end (end not included)
where start and end represent the index of items in that array.
The original array will not be modified.
 */
const animals = ['cat', 'dog', 'zebra', 'tiger', 'deer'];
console.log(animals);
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals);

const anStr = "Hello, how are you?"
console.log(anStr.slice(1, 5));
console.log(anStr);