import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, LOADING_PRODUCTS } from './productTypes'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get('http://localhost:5000/api/products', {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(res => dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        }))
        .catch(err => console.log("err ", err))
}

export const addProduct = (product) => dispatch => {
    console.log("product", product, "type of", typeof product)
    const name = product
    axios.post('http://localhost:5000/api/products', name)
    .then(res => 
         dispatch({
        type: ADD_PRODUCT,
        payload: res.data.name
    }))
    .catch(err => console.log(err))
}

export const deleteProduct = (id) => dispatch => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
    .then(res => dispatch({
        type: DELETE_PRODUCT,
        payload: id
    }))
    .catch(err => {console.log(err)})
}

export const loadingProducts = () => {
    return {
        type: LOADING_PRODUCTS,

    }
}