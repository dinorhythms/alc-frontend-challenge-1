import _ from "lodash";
import {
    GET_ALL_PIZZA,
    GET_PIZZA
} from '../types';

const initialState = {
    pizzas: {},
    pizza: null
};

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PIZZA:
            return {
                ...state,
                pizzas: _.mapKeys(action.payload, 'name')
            };
        case GET_PIZZA:
            const pizzas = _.mapKeys(action.payload.data, 'name')
            return {
                ...state,
                pizzas,
                pizza: pizzas[action.payload.id]
            };
        default:
            return state;
    }
}

export default pizzaReducer;