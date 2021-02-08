import { ADD_USER, DELETE_USER } from './userTypes'

const initialSatte = {
    users: []
}

const userReducer = (state = initialSatte, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                counter: 0
            }
        }

        default: return state
    }
}

export default userReducer