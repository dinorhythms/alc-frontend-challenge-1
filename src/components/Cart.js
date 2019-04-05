import React, { Component } from 'react'
import { Container, Row, Col,
    Button, ListGroup, ListGroupItem, Badge } from 'reactstrap';

import { connect } from 'react-redux';
import { getCart, confirmOrder, removeFromCart } from '../actions/cartActions';

import _ from 'lodash';

class Cart extends Component {

    componentDidMount(){
        this.props.getCart();
    }

    confirmOrder = ()=>{
        this.props.confirmOrder();
        this.props.history.push('/confirmation');
    }

    handleDelete = (key)=> {
        this.props.removeFromCart(key);
    }

    renderCart = () => {
        const { pizzas } = this.props.cart;
        return _.map(pizzas, (pizza,key) => {
            return(
                <React.Fragment key={pizza.name}>
                    <ListGroupItem className="d-flex justify-content-between">
                        <i onClick={()=>this.handleDelete(key)} className="fa fa-times-circle fa-2x text-danger" aria-hidden="true"></i>
                        <img  height="30px" src={`/assets/images/${pizza.name}.jpg`} className="img-fluidd roundedd" alt=""/>
                        {pizza.name} 
                        <Badge pill>Quantity: {pizza.quantity}</Badge>
                        <div className="text-info pull-rightt d-inline"><span>${pizza.price}</span></div>
                    </ListGroupItem>
                </React.Fragment>
            )
        })
    }

    render() {
        const { cart } = this.props;
        return (
        <div>
            <Container className="mt-5">
                    <Row>
                        <Col>
                            <h1 className="text-center text-info mb-3">Cart</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="8" className="mx-auto">
                            {cart.totalQuantity===0?(
                                <div className="text-center text-danger">
                                    <h2>Cart is Empty</h2>
                                </div>
                                ):(
                                <div>
                                    <ListGroup flush>
                                        {this.renderCart()}
                                    </ListGroup>
                                    <div className="text-right text-info mt-3">
                                        <h3>Total: ${cart.totalPrice}</h3>
                                        <h3>Quantity: {cart.totalQuantity}</h3>
                                        <Button size="lg" onClick={()=>this.confirmOrder()} color="info">Confirm</Button>
                                    </div>
                                </div>
                            )}
                               
                            
                            
                        </Col>
                        
                    </Row>
                </Container>
        </div>
        )
    }
}

const mapStateFromProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateFromProps,{getCart, confirmOrder, removeFromCart})(Cart);
