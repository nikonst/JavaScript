import { createStore } from 'redux'
import counterReduer from './counterReducer'

const store = createStore(counterReduer)

export default store
