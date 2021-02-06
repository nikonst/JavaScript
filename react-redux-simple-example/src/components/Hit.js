import React from 'react'
import { connect } from 'react-redux'
import { incrementByFive, resetHit } from '../redux/hit/hitActions'

const Hit = (props) => {
    return (
        <div>
            <div>
                <h3>Hit - {props.hit} </h3>
                <button onClick={props.resetHit}>Reset</button>
                <button onClick={props.incrementByFive}>Add 5</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        hit: state.hitReducer.hit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementByFive: () => dispatch(incrementByFive()),
        resetHit: () => dispatch(resetHit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hit)