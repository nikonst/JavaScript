import React, { useRef, useEffect, Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
//import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { connect, useDispatch } from 'react-redux'
import { addProduct, deleteProduct, getProducts } from '../reduxSetup/products/productActions'

function ProductList(props) {
    console.log(props)
    const textInput = useRef(null)
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(props.getProducts)
    }, [])

    console.log("props.products ", props.products)
    return (
        <Container>
            <p>
                <input type="text" name="input-text" ref={textInput} />

                <Button color="dark" onClick={() => {
                    if (textInput.current?.value) {
                        let productName = {}
                        productName["name"] = textInput.current?.value
                        props.addProduct(productName)
                    }
                }}>Add product</Button>
            </p>
            <ul className="list-group">
                {props.products.map((product, i) => (
                    <li key={i} className="list-group-item list-group-item-primary">
                        <Button className="btn btn-danger"
                            onClick={
                                () => {
                                    console.log(product)
                                    props.deleteProduct(product._id)
                                }
                            }
                        /* this.setState(state => ({
                            users: state.users.filter(user => user.id !== item.id)
                        }))
                    }} */
                        >Delete</Button>{product.name}
                    </li>
                ))}
            </ul>
       </Container>

    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts()),
        addProduct: (product) => dispatch(addProduct(product)),
        deleteProduct: (id) => dispatch(deleteProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

