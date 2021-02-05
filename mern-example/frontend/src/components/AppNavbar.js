import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container
} from 'reactstrap'

class AppNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb5">
                    <Container>
                        <NavbarBrand href="/">Users</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}>
                            <Collapse isOpen={this.state.isOpen}>
                                <Nav className="ml auto">
                                    <NavItem>
                                        <NavLink href="/">Github</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </NavbarToggler>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar


