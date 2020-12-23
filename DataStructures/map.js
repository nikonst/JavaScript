const getRandomInt = require("./helpers/getRandomInt")
const getRandomString = require("./helpers/getRandomString")

// The Map Object
let keepStrings = []

let dataMap = new Map()
for (let i = 0; i < 10; i++) {
    let str = getRandomString.getRandomString(7)
    dataMap.set(str, getRandomInt.getRandomInt(0, 100))
    keepStrings.push(str)
}
console.log("Map: ", dataMap)
console.log("Map size: ", dataMap.size)

// List the keys
for (let key of dataMap.keys()) {
    console.log(key)
}

// List the values
for (let value of dataMap.values()) {
    console.log(value)
}

// Check keys
console.log(dataMap.has(keepStrings[0]), " ", dataMap.has(keepStrings[5]), " ", dataMap.has(keepStrings[7]))
console.log(dataMap.has("TEST"), " ", dataMap.has("HELLO"), " ", dataMap.has(""))

// Get all values
keepStrings.forEach((st) => {
    console.log(dataMap.get(st))
})

// Get values and keys
dataMap.forEach((value, key) => {
    console.log(key + ' +++ ' + value)
})

//Entries
console.log(dataMap.entries())
for (let [key, value] of dataMap.entries()) {
    console.log(key + ' --- ' + value)
}

// Iterating Map with for..of
for (let [key, value] of dataMap) {
    console.log(key + ' = ' + value)
}

for (let key of dataMap.keys()) {
    console.log(key)
}

for (let value of dataMap.values()) {
    console.log(value)
}

for (let [key, value] of dataMap.entries()) {
    console.log(key + ' = ' + value)
}

let anArray = [...dataMap]
console.log("anArray: ", anArray)

let clone = new Map(dataMap)

console.log(dataMap === clone) // false (useful for shallow comparison)
console.log(typeof clone, " ", typeof dataMap) // object object

/* 

OUTPUT

Map:  Map(10) {
    'IUKSYBZ' => 72,
    'LDKNHZE' => 70,
    'RPQYNOO' => 36,
    'HYKBMUE' => 82,
    'HTIONBZ' => 36,
    'FTIGRRA' => 86,
    'ILUYUWU' => 52,
    'NJPHZFR' => 96,
    'TMVWXEG' => 67,
    'PFJUVWC' => 8
  }
  Map size:  10
  IUKSYBZ
  LDKNHZE
  RPQYNOO
  HYKBMUE
  HTIONBZ
  FTIGRRA
  ILUYUWU
  NJPHZFR
  TMVWXEG
  PFJUVWC
  72
  70
  36
  82
  36
  86
  52
  96
  67
  8
  true   true   true
  false   false   false
  72
  70
  36
  82
  36
  86
  52
  96
  67
  8
  IUKSYBZ +++ 72
  LDKNHZE +++ 70
  RPQYNOO +++ 36
  HYKBMUE +++ 82
  HTIONBZ +++ 36
  FTIGRRA +++ 86
  ILUYUWU +++ 52
  NJPHZFR +++ 96
  TMVWXEG +++ 67
  PFJUVWC +++ 8
  [Map Entries] {
    [ 'IUKSYBZ', 72 ],
    [ 'LDKNHZE', 70 ],
    [ 'RPQYNOO', 36 ],
    [ 'HYKBMUE', 82 ],
    [ 'HTIONBZ', 36 ],
    [ 'FTIGRRA', 86 ],
    [ 'ILUYUWU', 52 ],
    [ 'NJPHZFR', 96 ],
    [ 'TMVWXEG', 67 ],
    [ 'PFJUVWC', 8 ]
  }
  IUKSYBZ --- 72
  LDKNHZE --- 70
  RPQYNOO --- 36
  HYKBMUE --- 82
  HTIONBZ --- 36
  FTIGRRA --- 86
  ILUYUWU --- 52
  NJPHZFR --- 96
  TMVWXEG --- 67
  PFJUVWC --- 8
  IUKSYBZ = 72
  LDKNHZE = 70
  RPQYNOO = 36
  HYKBMUE = 82
  HTIONBZ = 36
  FTIGRRA = 86
  ILUYUWU = 52
  NJPHZFR = 96
  TMVWXEG = 67
  PFJUVWC = 8
  IUKSYBZ
  LDKNHZE
  RPQYNOO
  HYKBMUE
  HTIONBZ
  FTIGRRA
  ILUYUWU
  NJPHZFR
  TMVWXEG
  PFJUVWC
  72
  70
  36
  82
  36
  86
  52
  96
  67
  8
  IUKSYBZ = 72
  LDKNHZE = 70
  RPQYNOO = 36
  HYKBMUE = 82
  HTIONBZ = 36
  FTIGRRA = 86
  ILUYUWU = 52
  NJPHZFR = 96
  TMVWXEG = 67
  PFJUVWC = 8
  anArray:  [
    [ 'IUKSYBZ', 72 ],
    [ 'LDKNHZE', 70 ],
    [ 'RPQYNOO', 36 ],
    [ 'HYKBMUE', 82 ],
    [ 'HTIONBZ', 36 ],
    [ 'FTIGRRA', 86 ],
    [ 'ILUYUWU', 52 ],
    [ 'NJPHZFR', 96 ],
    [ 'TMVWXEG', 67 ],
    [ 'PFJUVWC', 8 ]
  ]
  false
  object   object */
  