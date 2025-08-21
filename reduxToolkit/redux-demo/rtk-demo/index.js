const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').actions

console.log('Initial state...', store.getState)
const unsubscribe = store.subscribe(() => {
    console.log('Updated state...', store.getState)
})

store.dispatch(cakeActions.ordered)
store.dispatch(cakeActions.ordered)
store.dispatch(cakeActions.ordered)
store.dispatch(cakeActions.restocked(2))

unsubscribe()