import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import counterReducer from './counter/counterReducer'
import hitReducer from './hit/hitReducer'

const rootReducer = combineReducers({counterReducer: counterReducer, hitReducer: hitReducer})
const store = createStore(rootReducer, composeWithDevTools())

export default store
