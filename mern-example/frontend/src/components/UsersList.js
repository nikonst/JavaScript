import React, { useRef, useEffect, Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect, useDispatch } from 'react-redux'
import { addUser, deleteUser, getUsers } from '../reduxSetup/users/userActions'

function UsersList(props) {
    console.log(props)
    const textInput = useRef(null)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(props.getUsers)
    }, [])

    console.log("props.users ", props.users)
    return (
        <Container>
            <p>
                <input type="text" name="input-text" ref={textInput} />

                <Button color="dark" onClick={() => {
                    if (textInput.current?.value) {
                        let userName = {}
                        userName["name"] = textInput.current?.value
                        props.addUser(userName)
                    }
                }}>Add user</Button>
            </p>
            <ul className="list-group">
                {props.users.map((item, i) => (

                    <li key={item._id} className="list-group-item list-group-item-primary">
                        <Button className="btn btn-danger"
                            onClick={
                                () => {
                                    console.log(item)
                                    props.deleteUser(item.id)
                                }
                            }
                        /* this.setState(state => ({
                            users: state.users.filter(user => user.id !== item.id)
                        }))
                    }} */
                        >Delete</Button>{item.name}
                    </li>
                ))}
            </ul>
       </Container>

    )
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers()),
        addUser: (user) => dispatch(addUser(user)),
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)

