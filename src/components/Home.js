import React, { Component } from 'react'
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, Button, Spinner } from 'reactstrap';

import { connect } from 'react-redux';
import { getAllPizza } from '../actions/homeActions';
import { addToCart } from '../actions/cartActions';

import _ from 'lodash';

class Home extends Component {

    componentDidMount(){
        this.props.getAllPizza();
    }

    pizzaDetails = (key) => {
        const url = `/pizzadetails/${key}`;
        this.props.history.push(url);
    }

    addToCart = (id) => {
        this.props.addToCart(id)
    }

    renderPizza = () => {
        const { pizzas } = this.props;
        return _.map(pizzas, (pizza,key) => {
            return(
                <React.Fragment key={pizza.name}>
                    <Col xs="12" sm="6" md="4" lg="3" className="mb-4">
                        <Card body className="text-center">
                            <CardImg top width="100%" src={`/assets/images/${pizza.name}.jpg`} alt={pizza.name} />
                            <CardBody>
                                <CardTitle>{pizza.name}</CardTitle>
                                <h3 className="text-info">${pizza.price}</h3>
                                <Button onClick={()=>this.addToCart(key)} color="success"><i className="fa fa-cart-plus" aria-hidden="true"></i></Button>{" "}
                                <Button onClick={()=>this.pizzaDetails(key)} color="info"><i className="fa fa-info-circle" aria-hidden="true"></i></Button>
                            </CardBody>
                        </Card>
                    </Col>
                </React.Fragment>
            )
        })
    }

    render() {
        const { pizzas } = this.props;
        if(!pizzas) return (
            <Container className="text-center mt-5">
                <Spinner color="info" />
            </Container>
        )
        return (
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1 className="text-center text-info mb-3">Best Pizzas</h1>
                    </Col>
                </Row>
                <Row>
                    {this.renderPizza()}
                </Row>
            </Container>
        )
    }
}

const mapStateFromProps = (state) => ({
    pizzas: state.pizzas.pizzas
})

export default connect(mapStateFromProps,{getAllPizza, addToCart})(Home);