import { combineReducers } from 'redux';
import pizzaReducer from './pizzaReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    pizzas: pizzaReducer,
    cart: cartReducer
})

export default rootReducer;