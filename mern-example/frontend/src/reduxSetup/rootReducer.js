import { combineReducers } from 'redux'
import productReducer from './products/productReducer'
import authReducer from './auth/authReducer'
import errorReducer from './auth/errorReducer'

export default combineReducers({
    products: productReducer,
    auth: authReducer,
    error: errorReducer 
})