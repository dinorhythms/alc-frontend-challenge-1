import _ from "lodash";
import {
    ADD_TO_CART,
    GET_CART,
    COMFIRM_ORDER,
    ORDER_MSG,
    // REMOVE_FROM_CART
} from '../types';

const initialState = {
    pizzas: {},
    totalPrice: 0,
    totalQuantity: 0,
    orderStatus: {
        success: false,
        deliveryTime:null
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const allPizzas = _.mapKeys(action.payload.data, 'name');
            const singlePizza = allPizzas[action.payload.id];
            const price = singlePizza.price;
            singlePizza.quantity = 1;
            singlePizza.inCart = true;
            let pizzas = {};
            pizzas[action.payload.id] = singlePizza;

            if(state.pizzas[action.payload.id]){
                state.pizzas[action.payload.id].price = state.pizzas[action.payload.id].price + singlePizza.price 
                state.pizzas[action.payload.id].quantity = state.pizzas[action.payload.id].quantity + 1;
                return {
                    ...state,
                    totalPrice: state.totalPrice + price,
                    totalQuantity: state.totalQuantity+1,
                }; 
            } else {
                return {
                    ...state,
                    totalPrice: state.totalPrice + singlePizza.price,
                    totalQuantity: state.totalQuantity+1,
                    pizzas: {...state.pizzas, ...pizzas}
                };
            }
            
        case GET_CART:
            return {
                ...state,
            };
        case COMFIRM_ORDER:
            return {
                ...state,
                pizzas: {},
                totalPrice: 0,
                totalQuantity: 0,
                orderStatus: {
                    success: action.payload.success,
                    deliveryTime: action.payload.deliveryTime
                }
            };
        case ORDER_MSG:
            return {
                ...state
            };
        default:
            return state;
    }
}

export default cartReducer;