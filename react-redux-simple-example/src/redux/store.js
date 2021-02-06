import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import hitReducer from './hit/hitReducer'

const store = combineReducers({counterReducer: counterReducer, hitReducer: hitReducer})

export default store
