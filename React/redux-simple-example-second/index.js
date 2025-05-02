const redux = require('redux')
const reduxLogger = require('redux-logger')

const INCREASE_COUNTER_ALPHA = "INCREASE_COUNTER_ALPHA"
const INCREASE_COUNTER_BETA = "INCREASE_COUNTER_BETA"
const INCREASE_DAYS_ALPHA = "INCREASE_DAYS_ALPHA"
const INCREASE_DAYS_BETA = "INCREASE_DAYS_BETA"

function increaseCounterAlpha() { // action creator
    return { // action
        type: INCREASE_COUNTER_ALPHA,
        payload: 1
    }
}

function increaseCounterBeta() { // action creator
    return { // action
        type: INCREASE_COUNTER_BETA,
        payload: 1
    }
}

function increaseDaysAlpha() { // action creator
    return { // action
        type: INCREASE_DAYS_ALPHA,
        payload: 1
    }
}

function increaseDaysBeta() { // action creator
    return { // action
        type: INCREASE_DAYS_BETA,
        payload: 1
    }
}

const initialStateCounters = {
    counterAlpha: 0, 
    counterBeta: 0
}

const initialStateDays = {
    daysAlpha: 0, 
    daysBeta: 0
}

const reducerCounters = (state = initialStateCounters, action) => {
    switch(action.type) {
        case INCREASE_COUNTER_ALPHA: return {
            ...state, // other properties of state are unchanged
            counterAlpha: state.counterAlpha + 1
        }
        case INCREASE_COUNTER_BETA: return {
            ...state, // other properties of state are unchanged
            counterBeta: state.counterBeta + 1
        }
        default: return state
    }
}

const reducerDays = (state = initialStateDays, action) => {
    switch(action.type) {
        case INCREASE_DAYS_ALPHA: return {
            ...state, // other propertiesof state are unchanged
            daysAlpha: state.daysAlpha + 1
        }
        case INCREASE_DAYS_BETA: return {
            ...state, // other propertiesof state are unchanged
            daysAlpha: state.daysAlpha + 1
        }
        default: return state
    }
}

const logger = reduxLogger.createLogger()
const applymiddleware = redux.applyMiddleware

const rootReducer = redux.combineReducers({
    counters: reducerCounters,
    days: reducerDays
})

const store = redux.createStore(rootReducer, applymiddleware(logger)) // reducer holds the initial state

console.log("**** ", store)
console.log("**** ", store.getState())
//store.subscribe(()=> console.log("State updated"))

//Both reducers recieves the Action. Each, manages its own state part.
store.dispatch(increaseCounterAlpha())
store.dispatch(increaseCounterAlpha())
store.dispatch(increaseCounterBeta())
store.dispatch(increaseDaysBeta())
store.dispatch(increaseDaysBeta())
store.dispatch(increaseDaysAlpha())

console.log("**** ", store.getState())
