import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, LOADING_PRODUCTS } from './productTypes'

const initialState = {
    products: [],
    loading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            //console.log("action.payload", action.payload)
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        }
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, { name: action.payload }]
            }
        }
        case DELETE_PRODUCT: {
            console.log("STATE ", state, "ACTION ", action)
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            }
        }
        case LOADING_PRODUCTS: {
            return {
                ...state,
                loading: true
            }
        }
        default: return state
    }
}

export default productReducer