import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: uuidv4(), name: "Ian" },
                { id: uuidv4(), name: "Tom" },
                { id: uuidv4(), name: "Ann" },
            ]
        }
    }

    render() {
        return (

            <Container>
                <Button color="dark" onClick={() => {
                    const name = prompt("Enter  user")
                    if (name) {
                        this.setState({
                            users: [...this.state.users, { id: uuidv4(), name: name }]
                        });
                    }
                }}>Add user</Button>
                <ul className="list-group">

                    {this.state.users.map((item, i) => (
                        <li key={item.id} className="list-group-item list-group-item-primary">
                            <Button className="btn btn-danger"
                                onClick={
                                    () => {
                                        this.setState(state => ({
                                            users: state.users.filter(user => user.id !== item.id)
                                        }))
                                    }}
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
}


