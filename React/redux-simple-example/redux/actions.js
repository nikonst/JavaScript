import {CREATE_CLAIM, CREATE_POLICY, DELETE_POLICY} from "./types.js"

export const createClaim = (name, amountOfMoneyToCollect) => { // ACTION CREATOR - Just Return Type and Payload
    return { // the form
        type: CREATE_CLAIM,
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}

export const createPolicy = (name) => { // ACTION CREATOR - Just Return Type and Payload
    return { // the form
        type: CREATE_POLICY,
        payload: {
            name: name,
            amount: 20
        }
    }
}

export const deletePolicy = (name) => { // ACTION CREATOR - Just Return Type and Payload
    return { // the form
        type: DELETE_POLICY,
        payload: {
            name: name,
            
        }
    }
}