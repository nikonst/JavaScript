//import {add, sub, mult, div} from './modules/operations.js'
import { add, mult, isNull, checkValue } from './modules/operations'
import { Person } from './modules/people'
import { anArray } from './modules/data'
import { fetchData } from './modules/fetchData'

test("Add 1 + 1 equals 2", () => {
    expect(add(1, 1)).toBe(2)
})

test("Add 1 + 1 not equals 3", () => {
    expect(add(1, 1)).not.toBe(3)
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
    expect(anArray).toContain("Lynn")
})

test('Get user with name "Leanne Graham"', async () => {
    const data = await fetchData()
    expect(data.name).toStrictEqual("Leanne Graham")
  });