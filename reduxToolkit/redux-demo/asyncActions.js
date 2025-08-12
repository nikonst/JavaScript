const redux = require("redux")
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

const fetchUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSucceeded = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: payload.error
            }
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequested)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.id)
                dispatch(fetchUsersSucceeded, users)
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchUsersFailed, err)
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.state)
})
store.dispatch(fetchUsers)