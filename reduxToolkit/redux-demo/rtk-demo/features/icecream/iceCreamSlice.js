const createSlcie = require("@reduxjs/toolkit").createSlice

const initialState = {
    numOfIceCreams: 40
}
const iceCreamSlice = createSlcie({
    name:"icecream",
    initialState: initialState,
    reducers: {
        ordered: state => {
            state.numOfIceCreams --
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions

