import { ADD_ONE, RESET } from './counterTypes'

const initialSatte = {
    counter: 0
}

const counterReduer = (state = initialSatte, action) => {
    switch (action.type) {
        case ADD_ONE: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case RESET: {
            return {
                ...state,
                counter: 0
            }
        }

        default: return state
    }
}

export default counterReduer