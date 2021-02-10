import { GET_USERS, ADD_USER, DELETE_USER, LOADING_USERS } from './userTypes'
import axios from 'axios'

export const getUsers = () => dispatch => {
    //dispatch(loadingUsers())
    axios.get('http://localhost:5000/api/users', {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
        .catch(err => console.log("err ", err))
}

export const addUser = (user) => dispatch => {
    console.log("user", user, "type of", typeof user)
    const name = user
    axios.post('http://localhost:5000/api/users', name)
    .then(res => 
         dispatch({
        type: ADD_USER,
        payload: res.data.name
    }))
    .catch(err => console.log(err))
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