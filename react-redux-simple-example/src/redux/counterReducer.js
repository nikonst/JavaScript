import { ADD_ONE } from './counterTypes'

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
        default: return state
    }
}

export default counterReduer