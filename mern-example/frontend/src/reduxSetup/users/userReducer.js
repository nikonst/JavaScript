import { v4 as uuidv4 } from 'uuid'
import { GET_USERS, ADD_USER, DELETE_USER } from './userTypes'

const initialState = {
    users: [
        { id: uuidv4(), name: "Ian" },
        { id: uuidv4(), name: "Tom" },
        { id: uuidv4(), name: "Ann" },
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state
            }
        }
        case ADD_USER: {
            return {
                ...state,
                
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                
            }
        }

        default: return state
    }
}

export default userReducer