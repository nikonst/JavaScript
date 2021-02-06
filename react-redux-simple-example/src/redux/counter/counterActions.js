import { ADD_ONE, RESET } from './counterTypes'

export const addOne = () => {
    return {
        type: ADD_ONE
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}