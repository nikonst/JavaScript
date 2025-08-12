const redux = require("redux")
const createStore = redux.createStore

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

const reduxer = (state = initialState, action) => {
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

const store = createStore(reducer)
