import _ from "lodash";
import {
    ADD_TO_CART,
    GET_CART,
    COMFIRM_ORDER,
    ORDER_MSG,
    REMOVE_FROM_CART,
    CALL_FLASH
} from '../types';

const initialState = {
    pizzas: {},
    totalPrice: 0,
    totalQuantity: 0,
    orderStatus: {
        success: false,
        deliveryTime:null
    },
    flashMessage: {
        status: false,
        name:''
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
                    flashMessage: {
                        status: true,
                        pizza: singlePizza.name
                    }
                }; 
            } else {
                return {
                    ...state,
                    totalPrice: state.totalPrice + singlePizza.price,
                    totalQuantity: state.totalQuantity+1,
                    pizzas: {...state.pizzas, ...pizzas},
                    flashMessage: {
                        status: true,
                        pizza: singlePizza.name
                    }
                };
            }
         case REMOVE_FROM_CART:

            // save price before deleting
            const newprice = state.pizzas[action.payload].price;
            delete state.pizzas[action.payload];

            return {
                ...state,
                totalPrice: state.totalPrice - newprice,
                totalQuantity: state.totalQuantity-1,
            }    
        case GET_CART:
            return {
                ...state,
            };
        case CALL_FLASH:
            return {
                ...state,
                flashMessage: {
                    status: false,
                }
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