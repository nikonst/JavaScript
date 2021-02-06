import {INCREMENET_BY_FIVE, RESET} from './hitTypes'

export const incrementByFive = () => {
    return {
        type: INCREMENET_BY_FIVE
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

