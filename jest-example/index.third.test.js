import { countLetters } from './modules/stringOperations'

import moduleToBeMocked, { functionToBeMocked } from './modules/moduleToBeMocked';

jest.mock('./modules/moduleToBeMocked', () => {
    return {
        __esModule: true,
        default: jest.fn((x) => x * x),
        functionToBeMocked: jest.fn((x) => 2 * x),
    }
})

describe("TDD example", () => {
    it("Count letters in string", () => {
        const result = countLetters('p', 'happy')
        expect(result).toBe(2)
    })
    it("Check mock module", () => {
        expect(moduleToBeMocked(3)).toBe(9)
        expect(functionToBeMocked(3)).toBe(6)
    })
})