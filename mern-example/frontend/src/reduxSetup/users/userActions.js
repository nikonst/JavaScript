import { GET_USERS, ADD_USER, DELETE_USER, LOADING_USERS } from './userTypes'
import axios from 'axios'

export const getUsers = () => dispatch => {
    dispatch(loadingUsers())
    axios.get('/api/users')
    .then(res => dispatch({
        type: GET_USERS,
        payload: res.data
    }))
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

export const loadingUsers = () => {
    return {
        type: LOADING_USERS,
        
    }
}