import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { orderMsg } from '../actions/cartActions';

class Comfirmation extends Component {

    componentDidMount(){
        this.props.orderMsg();
    }

    renderDate = ()=>{
        const { orderStatus } = this.props;
        const mydate = new Date(1000*orderStatus.deliveryTime)
        return(
            <div>
                <h3>Your order will be delivered by {mydate.toString()}</h3>
            </div>
        )
    }

    render() {
        
        return (
        <div>
            <Container className="mt-5 text-center">
                    <Row>
                        <Col>
                            <h1 className="text-center text-info mb-3">Order Confirmed</h1>
                            {this.renderDate()}
                        </Col>
                    </Row>
                </Container>
        </div>
        )
    }
}

const mapStateFromProps = (state) => ({
    orderStatus: state.cart.orderStatus
})

export default connect(mapStateFromProps,{orderMsg})(Comfirmation);