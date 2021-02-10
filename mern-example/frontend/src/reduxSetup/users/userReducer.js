import { v4 as uuidv4 } from 'uuid'
import { GET_USERS, ADD_USER, DELETE_USER, LOADING_USERS } from './userTypes'

const initialState = {
    users: [
        /* { id: uuidv4(), name: "Ian" },
        { id: uuidv4(), name: "Tom" },
        { id: uuidv4(), name: "Ann" }, */
    ],
    loading: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            //console.log("action.payload", action.payload)
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users: [...state.users, { id: uuidv4(), name: action.payload }]
            }
        }
        case DELETE_USER: {
            console.log("STATE ", state, "ACTION ", action)
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        }
        case LOADING_USERS: {
            return {
                ...state,
                loading: true
            }
        }
        default: return state
    }
}

export default userReducer