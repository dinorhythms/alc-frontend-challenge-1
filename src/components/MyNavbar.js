import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Container,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav } from 'reactstrap';

export default class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
        <Container>
            <NavbarBrand className="text-white">Pizza Store</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                
                    <Link className="text-white" to="/cart">
                  <Button color="info">
                    Cart <i className="fa fa-cart-plus" aria-hidden="true"></i> 
                  </Button>{' '}
                    </Link>
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
