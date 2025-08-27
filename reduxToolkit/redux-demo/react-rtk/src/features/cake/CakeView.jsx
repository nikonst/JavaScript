import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
    const dispatch = useDispatch()
    const numOfCakes = useSelector((state) => {
        return state.cake.numOfCakes
    })
    return (
        <div>
            <h3>CakeView</h3>
            <p>Number of Caked</p>
            <p>{numOfCakes}</p>
            <p>
                <button onClick={()=>dispatch(ordered())}>Order</button>
                <button onClick={()=>dispatch(restocked(1))}>Restock</button>
            </p>
        </div>
    )
}
