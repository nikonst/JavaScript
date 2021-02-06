import { combineReducers, createStore } from 'redux'
import counterReducer from './counter/counterReducer'
import hitReducer from './hit/hitReducer'

const rootReducer = combineReducers({counterReducer: counterReducer, hitReducer: hitReducer})
const store = createStore(rootReducer)

export default store
