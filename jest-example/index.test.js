//import {add, sub, mult, div} from './modules/operations.js'
import {add, isNull} from './modules/operations'

test("Add 1 + 1 equals 2", () => {
    expect(add(1,1)).toBe(2)
})

test("Add 1 + 1 not equals 3", () => {
    expect(add(1,1)).not.toBe(3)
})

test("Is Null", () => {
    expect(isNull()).toBeNull()
})