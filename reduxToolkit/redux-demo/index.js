const redux = require('redux')
const reduxLogger = require("redux-logger")
//const bindActionCreators = redux.bindActionCreators

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const FRUIT_ORDERED = 'FRUIT_ORDERED'
const FRUIT_RESTOCK = 'FRUIT_RESTOCK'
const BANANA_ORDERED = 'BANANA_ORDERED'
const BANANA_RESTOCK = 'BANANA_RESTOCK'

function orderFruit() { //Action creator
    return { //Action
        type: FRUIT_ORDERED,
        quantity: 1
    }
}

function restockFruit(quantity = 1) { //Action creator
    return { //Action
        type: FRUIT_RESTOCK,
        quantity: quantity
    }
}

function orderBanana() { //Action creator
    return { //Action
        type: BANANA_ORDERED,
        quantity: 1
    }
}

function restockBanana(quantity = 1) { //Action creator
    return { //Action
        type: BANANA_RESTOCK,
        quantity: quantity
    }
}

const initialFruitState = {
    numOfFruits: 10,
}

const initialBananaState = {
    numOfBananas: 20
}

//Reducer
const fruitReducer = (state = initialFruitState, action) => {
    switch (action.type) {
        case FRUIT_ORDERED:
            return {
                ...state,
                numOfFruits: state.numOfFruits - action.quantity
            }
        case FRUIT_RESTOCK:
            return {
                ...state,
                numOfFruits: state.numOfFruits + action.quantity
            }
        default:
            return state
    }
}

//Reducer
const bananaReducer = (state = initialBananaState, action) => {
    switch (action.type) {
        case BANANA_ORDERED:
            return {
                ...state,
                numOfBananas: state.numOfBananas - action.quantity
            }
        case BANANA_RESTOCK:
            return {
                ...state,
                numOfBananas: state.numOfBananas + action.quantity
            }
        default:
            return state

    }
}

const rootReducer = combineReducers({
    fruit: fruitReducer,
    banana: bananaReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Inital State:', store.getState())

const unsubsribe = store.subscribe(() => {
    //Note needed when applying Logger
    //console.log("Updated state:", store.getState())
})

store.dispatch(orderFruit())
store.dispatch(orderFruit())
// store.dispatch({
//     type: FRUIT_ORDERED,
//     quantity: 5
// })
store.dispatch(restockFruit(5))
store.dispatch(orderBanana())
store.dispatch(orderBanana())
store.dispatch(restockBanana(7))

//Not necessary
// const actions = bindActionCreators({orderFruit, restockFruit}, store.dispatch)
// actions.orderFruit()
// actions.orderFruit()
// actions.orderFruit()
// actions.restockFruit(2)

unsubsribe()