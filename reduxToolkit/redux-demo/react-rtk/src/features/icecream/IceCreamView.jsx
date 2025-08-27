import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
    const [value, setValue] = useState(1)
    const dispatch = useDispatch()
    const numOfIceCreams = useSelector((state) => {
        return state.icecream.numOfIceCreams
    })
    return (
        <div>
            <h3>IceCream View</h3>
            <p>Number of IceCreams</p>
            <p>{numOfIceCreams}</p>
            <p>
                <button onClick={() => dispatch(ordered())}>Order</button>
                <input type='number' value={value}
                    onChange={e => setValue(parseInt(e.target.value))} />
                <button onClick={() => dispatch(restocked(value))}>Restock</button>
            </p>
        </div>
    )
}
