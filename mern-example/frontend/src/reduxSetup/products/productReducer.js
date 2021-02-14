import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, LOADING_PRODUCTS } from './productTypes'

const initialState = {
    products: [],
    loading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        }
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products,  action.payload.data ]
            }
        }
        case DELETE_PRODUCT: {
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