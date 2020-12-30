//import {add, sub, mult, div} from './modules/operations.js'
import { add, sub, mult, div, isNull, checkValue } from './modules/operations'
import { Person } from './modules/Person'
import { arrayData } from './data/arrayData'
import { fetchData } from './modules/fetchData'
import { reverseString, checkPalindrome } from './modules/stringOperations'

test("Add 1 + 1 equals 2", () => {
    expect(add(1, 1)).toBe(2)
})

test("Add 1 + 1 not equals 3", () => {
    expect(add(1, 1)).not.toBe(3)
})

test("1 minus 1 equals 0", () =>{
    expect(sub(1,1)).toBe(0)
})

test("4 divided by 2 equals 2", () =>{
    expect(div(4,2)).toBe(2)
})

test("Is Null", () => {
    expect(isNull()).toBeNull()
})

test("Check Value", () => {
    expect(checkValue(0)).toBeFalsy()
})

test("Less than 100", () => {
    expect(mult(1, 1)).toBeLessThan(100)
})

test("Check Value", () => {
    const p = new Person('Ann', 'Smith')
    expect(p.getPerson()).toStrictEqual({ name: 'Ann', surname: 'Smith' })
})

test('No "i" in "Jest"', () => {
    expect('Jest').not.toMatch(/i/)
})

test('Lynn should be in data array', () => {
    expect(arrayData).toContain("Lynn")
})

test('Get user with name "Leanne Graham"', async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1'
    const data = await fetchData(url)
    expect(data.name).toStrictEqual("Leanne Graham")
})

test('Get with invalid URL', async () => {
    const url = 'https://oneTwoThree/abc/'
    const data = await fetchData(url)
    expect(data).toStrictEqual('An Error Occured')
})

test('Reverse a string function is defined', () => {
    expect(reverseString).toBeDefined()
})

test('Reverse a string is a function', () => {
    expect(typeof reverseString).toStrictEqual('function')
})

test('Reverse a string', () => {
    expect(reverseString("abc")).toStrictEqual("cba")
})

test('Reverse a string II', () => {
    expect(reverseString("abc")).not.toStrictEqual("abc")
})

test('Check palindrome', () => {
    expect(checkPalindrome("ANNA")).toBe(true)
})