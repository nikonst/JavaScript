// JavaScript 2D Arrays

// A multidimensional array is an array that contains another array
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Access elements
console.log(data)
console.log(data[0])
console.log(data[1])
console.log(data[0][0])
console.log(data[1][2])

// Adding Element to the Outer Array
data.push([10, 11, 12])
console.log(data)

// Adding Element to the Inner Array
data[1].push(6.5)
console.log(data)

// Remove Element from Outer Array
data.pop()
console.log(data)

// Remove Element from Inner Array
data[1].pop()
console.log(data)

// Using splice
data.splice(0, 1)
console.log(data)

data[1].splice(0, 1)
console.log(data)

// Iterating
console.group('----------------------------')
let data2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(data2)

// Iterate I
for (i of data2) {
    console.log(i)
}

for (i of data2)
    for (j of i)
        console.log(j)

// Iterate II
data2.forEach(element => {
    console.log(element)
})

// Iterate III
for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < data2[i].length; j++) {
        console.log(data2[i][j])
    }
    console.log("")
}

//Columns
for (let i = 0; i < data2.length; i++) {
    for (let j = 0; j < data2[i].length; j++) {
        console.log(data2[j][i])
    }
    console.log("")
}

console.log("++++++++++++++++++")
data2.forEach(element => {
    element.forEach(el => {
        console.log(el)
    })
})

// High order functions on 2d arrays
console.log("Sums per row")
data2.forEach(element => {
    sum = element.reduce((s, n) => {
        return s = s + n
    })
    console.log(sum)
})

console.log("Rows with sum greater than 10")
let rowsWithSumGreaterThan10 = data2.filter(element => {
    sum = element.reduce((s, n) => {
        return s = s + n
    })
    return (sum > 10) ? element : ""
})
console.log(rowsWithSumGreaterThan10)

