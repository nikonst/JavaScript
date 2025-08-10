const redux = require('redux')
const createStore = redux.createStore

const FRUIT_ORDERED = 'FRUIT_ORDERED'

function orderFruit() { //Action creator
    return { //Action
        type: FRUIT_ORDERED,
        quantity: 1
    }
}

const initialState = {
    numOfFruits: 10
}

//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FRUIT_ORDERED:
            return {
                ...state,
                numOfFruits: state.numOfFruits - action.quantity
            }
        default:
            return state

    }
}

const store = createStore(reducer)
console.log('Inital State:', store.getState())

const unsubsribe = store.subscribe(() => {
    console.log("Updated state:", store.getState())
})

store.dispatch(orderFruit())
store.dispatch(orderFruit())
store.dispatch(orderFruit())
store.dispatch({
    type: FRUIT_ORDERED,
    quantity: 5
})

unsubsribe()