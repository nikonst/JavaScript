import axios from 'axios'
//import User from '../../../models/User'
import { returnErrors } from './errorActions'

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ERRORS,
    CLEAR_ERRORS
} from "./authTypes"

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING })
    const token = getState().auth.token
    const configHeader = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    if (token) {
        configHeader.headers['x-auth-token'] = token
    } 
    
    axios.get('/api/auth/user', configHeader)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}