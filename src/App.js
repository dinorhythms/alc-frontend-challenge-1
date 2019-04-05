import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import PizzaDetails from './components/PizzaDetails';
import Cart from './components/Cart';
import Comfirmation from './components/Comfirmation';
import FlashMessage from './components/FlashMessage';

class App extends Component {
  render() {
    return (
      <Router>
        <MyNavbar/>
        <FlashMessage/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/pizzadetails/:id" component={PizzaDetails}/>
            <Route path="/cart" component={Cart}/>          
            <Route path="/confirmation" component={Comfirmation}/>   
        </Switch>
      </Router>
    );
  }
}

export default App;
