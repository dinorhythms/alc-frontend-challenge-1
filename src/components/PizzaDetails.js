import React, { Component } from 'react'
import { Container, Row, Col, Card, CardBody, CardSubtitle,
    CardTitle, Button, Spinner, ListGroup, ListGroupItem } from 'reactstrap';

import { connect } from 'react-redux';
import { getPizza } from '../actions/homeActions';
import { addToCart } from '../actions/cartActions';

class PizzaDetails extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.getPizza(id);
    }

    addToCart = (id) => {
        this.props.addToCart(id)
    }

    render() {
        const { pizza } = this.props;
        if(!pizza) return (
            <Container className="text-center mt-5">
                <Spinner color="info" />
            </Container>
        )
        return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center text-info mb-3">{pizza.name} Pizza</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="5">
                        <img src={`/assets/images/${pizza.name}.jpg`} className="img-fluid rounded" alt=""/>
                    </Col>
                    <Col md="7">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle>{pizza.name}</CardTitle>
                                <h2 className="text-info mb-3">${pizza.price}</h2>
                                <Button onClick={()=>this.addToCart(pizza.name)} color="success" className="mb-3"><i className="fa fa-cart-plus fa-2x" aria-hidden="true"></i></Button>{" "}
                                <CardSubtitle className="mb-3">Ingredients</CardSubtitle>
                                <ListGroup className="mb-3">
                                    {pizza.ingredients.map(ingredient => {
                                        return (
                                            <ListGroupItem key={ingredient}>{ingredient}</ListGroupItem>
                                        )
                                    })}
                                </ListGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

const mapStateFromProps = (state) => ({
    pizza: state.pizzas.pizza
})

export default connect(mapStateFromProps,{getPizza, addToCart})(PizzaDetails);
