const createSlice = require('@reduxjs/toolkit').createSlice

const intialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    intialState: intialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions