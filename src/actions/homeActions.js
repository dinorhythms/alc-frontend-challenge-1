import {
    GET_ALL_PIZZA,
    GET_PIZZA
} from '../types';
import pizzas from '../server/pizzas.json';

export const getAllPizza = () => {
    // make a copy of the json data
    const data = [...pizzas];
    return {
        type: GET_ALL_PIZZA,
        payload: data
    }
}

export const getPizza = (id) => {
    // we need to get the data again incase users view the url directly and the state is not set yet
    const data = [...pizzas];
    return {
        type: GET_PIZZA,
        payload: {
            id,
            data
        }
    }
}