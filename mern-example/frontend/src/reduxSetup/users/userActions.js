import { GET_USERS, ADD_USER, DELETE_USER } from './userTypes'

export const getUsers = () => {
    return {
        type: GET_USERS
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}