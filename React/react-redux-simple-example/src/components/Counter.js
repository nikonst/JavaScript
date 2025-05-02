import React from 'react'
import { connect } from 'react-redux'
import { addOne, reset } from '../redux/counter/counterActions'

function Counter(props) {
    return (
        <div>
            <h3>Counter - {props.counter} </h3>
            <button onClick={props.reset}>Reset</button>
            <button onClick={props.addOne}>Add 1</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counterReducer.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => dispatch(addOne()),
        reset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
