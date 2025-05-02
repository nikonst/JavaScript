import {createClaim, createPolicy, deletePolicy} from "./redux/actions.js"
import {accounting, claimsHistory, policies} from "./redux/reducers.js"
import {createStore, combineReducers} from 'redux'

console.clear()

// Setup
// ******** STATE ********
// Initial State is defined in Reducers
const rootReducer = combineReducers({
    accounting: accounting, //name: reducer
    claimsHistory: claimsHistory,
    policies: policies
})
// ******** STATE ********

// Store
const store = createStore(rootReducer)
console.log("Initial state: ",store.getState())
//

store.dispatch(createPolicy("Alex")) // dispatch an action - "action" function is not combined to the store
console.log(store.getState())
store.dispatch(createClaim("Alex", 100))
console.log(store.getState())
store.dispatch(deletePolicy("Alex"))
console.log(store.getState())

store.dispatch(createPolicy("Alex")) // dispatch an action
console.log(store.getState())
store.dispatch(createClaim("Alex", 100))
console.log(store.getState())
store.dispatch(deletePolicy("Alex"))
console.log(store.getState())

store.dispatch(createPolicy("Jane")) // dispatch an action - "action" function is not combined to the store
console.log(store.getState())
store.dispatch(createClaim("Jane", 50))
console.log(store.getState())