const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('Initial state...', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('Updated state...', store.getState())
})

store.dispatch(cakeActions.restocked(2))
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(2))

unsubscribe()