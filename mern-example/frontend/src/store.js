import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//import rootReducer from './reduxSetup/rootReducer'
import productReducer from './reduxSetup/rootReducer'

const middleware = [thunk]

const store = createStore(productReducer, composeWithDevTools(applyMiddleware(...middleware)))
/* const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    composeWithDevTools())
)
 */
export default store