import { INCREMENET_BY_FIVE, RESET_HIT } from './hitTypes'

const initialState = {
    hit: 100
}

const hitReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENET_BY_FIVE: {
            return {
                ...state,
                hit: state.hit + 5
            }
        }
        case RESET_HIT: {
            return {
                ...state,
                hit: 100
            }
        }
        default:
            return state
    }
}

export default hitReducer