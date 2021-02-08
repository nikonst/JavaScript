import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reduxSetup/rootReducer'
//import userReducer from './reduxSetup/users/userReducer'
import userReducer from './reduxSetup/users/userReducer'

const middleware = [thunk]

const store = createStore(userReducer, composeWithDevTools())
/* const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    composeWithDevTools())
)
 */
export default store