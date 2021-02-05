import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '../redux/counterActions'

function Counter(props) {
    return (
        <div>
            <h3>Counter - {props.counter} </h3>
            <button onClick={props.addOne}>Add 1</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => dispatch(addOne())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
