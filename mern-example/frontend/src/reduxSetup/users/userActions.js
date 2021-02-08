import { ADD_USER, DELETE_USER } from './userTypes'

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

export const  deleteUser= () => {
    return {
        type: DELETE_USER
    }
}