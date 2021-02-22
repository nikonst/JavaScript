import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//import rootReducer from './reduxSetup/rootReducer'
import rootReducer from './reduxSetup/rootReducer'

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
/* const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    composeWithDevTools())
)
 */
console.log("STORE", store)
console.log("STATE", store.getState())
//store.dispatch(getProducts())

export default store