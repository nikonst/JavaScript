const redux = require('redux')

const INCREASE_COUNTER = "INCREASE_COUNTER"

function increaseCounter() { // action creator
    return { // action
        type: INCREASE_COUNTER,
        payload: 1
    }
}

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER: return {
            ...state, // other propertiesof state are unchanged
            counter: state.counter + 1
        }
        default: return state
    }
}

const store = redux.createStore(reducer) // reducer holds the initial state
console.log(store)
console.log(store.getState())
store.subscribe(()=> console.log("State updated"))
store.dispatch(increaseCounter())
store.dispatch(increaseCounter())
store.dispatch(increaseCounter())
console.log(store.getState())
