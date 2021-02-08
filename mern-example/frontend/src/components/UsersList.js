import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { deleteUser, getUsers } from '../reduxSetup/users/userActions'

function UsersList(props) {
    console.log(props)
        return (
            <Container>
                {/*  <Button color="dark" onClick={() => {
                    const name = prompt("Enter  user")
                    if (name) {
                        this.setState({
                            users: [...this.state.users, { id: uuidv4(), name: name }]
                        });
                    }
                }}>Add user</Button> */}
                <ul className="list-group">
                    {props.users.map((item, i) => (
                        
                        <li key={item.id} className="list-group-item list-group-item-primary">
                            <Button className="btn btn-danger"
                                onClick={
                                    () => { console.log(item) 
                                        props.deleteUser(item.id) }
                                }
                                        /* this.setState(state => ({
                                            users: state.users.filter(user => user.id !== item.id)
                                        }))
                                    }} */
                            >Delete</Button>{item.name}
                        </li>
                    ))}
                </ul>
                {/* <ListGroup>
                    {this.state.users.map((name) => {
                        <ListGroupItem>
                            {name}
                        </ListGroupItem>
                    })}
                </ListGroup> */}
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
        deleteUser: (id) => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)

