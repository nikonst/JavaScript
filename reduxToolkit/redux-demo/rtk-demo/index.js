const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions

console.log('Initial state...', store.getState())
const unsubscribe = store.subscribe(() => {
    //console.log('Updated state...', store.getState())
})

store.dispatch(cakeActions.restocked(2))
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(2))
store.dispatch(iceCreamActions.ordered())

unsubscribe()