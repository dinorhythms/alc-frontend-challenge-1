import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { callFlash } from '../actions/cartActions';

class FlashMessage extends React.Component {

    componentDidUpdate(){
        const { status } = this.props.cart.flashMessage;

        if(status){
            setInterval(()=>{
                // call action
                this.props.callFlash();
            },2000)
        }
    }

    render(){
        const { flashMessage } = this.props.cart
        if(!flashMessage.status) return null;
        return (
            <div ref={this.myRef}>
                <Container>
                    <Row>
                        <Col className="text-center text-info mt-3">
                            <div className="alert alert-success" role="alert">
                                <h4 className="alert-heading"><span className="text-danger">{flashMessage.pizza}</span> Added to Cart</h4>
                                <p className="mb-0"></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps,{callFlash})(FlashMessage);