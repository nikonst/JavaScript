import { combineReducers } from 'redux'
import productReducer from './products/productReducer'
import authReducer from './auth/authReducer'
import errorReducer from './auth/errorReducer'

export default combineReducers({
    productReducer: productReducer,
    authReducer: authReducer,
    errorReducer: errorReducer 
})