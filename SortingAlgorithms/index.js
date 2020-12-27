const getRandomInt = require("./helpers/getRandomInt")

const { performance } = require('perf_hooks');

bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
            }
        }
    }
    return array
}

insertionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key
    }
    return array
}

/* quickSortPartition = (array, left = 0, right = array.length - 1) => {
    let pivot = array[Math.floor((right + left) / 2)]
    let low = left
    let high = right

    while (low <= high) {
        while (array[low] < pivot) {
            low++
        }
        while (array[high] > pivot) {
            high--
        }
        if (low <= high) {
            [array[low], array[high]] = [array[high], array[low]]
            //swap(array, low, high); //sawpping two elements
            low++
            high--
        }
    }

    //[array[low], array[high]] = [array[high], array[low]]

    return low
}

quickSort = (array, left = 0, right = array.length - 1) => {

    let pivotIndex = quickSortPartition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);

    return array
}
 */
merge = (arr1, arr2) => {
    let sorted = [];

    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift())
        } else {
            sorted.push(arr2.shift())
        }
    }
    return sorted.concat(arr1.slice().concat(arr2.slice()));
}

mergeSort = arr => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

buildAarray = (n) => {
    let a = []
    for (let i = 0; i < n; i++) {
        a.push(getRandomInt.getRandomInt(-100, 100))
    }
    return a
}

console.log("BUBBLE---------------------------")
let bubbleArray = buildAarray(20)
console.log(bubbleArray)
const t0 = performance.now();
bubbleArray = bubbleSort(bubbleArray)
const t1 = performance.now();
console.log(`Bubble sort: ${t1 - t0} milliseconds.`);
console.log(bubbleArray)

console.log("INSERTION---------------------------")
let insertionArray = buildAarray(20)
console.log(insertionArray)
const t2 = performance.now();
insertionArray = insertionSort(insertionArray)
const t3 = performance.now();
console.log(`Insertion sort: ${t3 - t2} milliseconds.`);
console.log(insertionArray)

console.log("MERGE---------------------------")
let mergeArray = buildAarray(20)
console.log(mergeArray)
const t4 = performance.now();
mergeArray = mergeSort(mergeArray)
const t5 = performance.now();
console.log(`Merge sort: ${t5 - t4} milliseconds.`);
console.log(mergeArray)

