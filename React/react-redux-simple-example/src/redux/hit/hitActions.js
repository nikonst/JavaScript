import {INCREMENET_BY_FIVE, RESET_HIT} from './hitTypes'

export const incrementByFive = () => {
    return {
        type: INCREMENET_BY_FIVE
    }
}

export const resetHit = () => {
    return {
        type: RESET_HIT
    }
}

