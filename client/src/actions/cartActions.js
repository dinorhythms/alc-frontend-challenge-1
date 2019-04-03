import {
    ADD_TO_CART,
    GET_CART,
    COMFIRM_ORDER,
    ORDER_MSG
} from '../types';
import pizzas from '../server/pizzas.json';
import order from '../server/order.json';

export const addToCart = (id) => {
    const data = [...pizzas];
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            data
        }
    }
}

export const getCart = () => {
    return {
        type: GET_CART,
    }
}

export const confirmOrder = () => {
    const data = order;
    return {
        type: COMFIRM_ORDER,
        payload: data        
    }
}

export const orderMsg = () => {
    return {
        type: ORDER_MSG,
    }
}