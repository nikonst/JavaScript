import React from 'react'
import { connect } from 'react-redux'
import { incrementByFive, reset } from '../redux/hit/hitActions'

export default function Hit() {
    return (
        <div>
            <div>
                <h3>Hit - {props.counter} </h3>
                <button onClick={props.reset}>Reset</button>
                <button onClick={props.incrementByFive}>Add 5</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hit: state.hit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementByFive: dispatch(incrementByFive),
        reset: dispatch(reset)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hit)