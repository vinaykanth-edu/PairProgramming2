import {ADD_TO_CART, ADD_TO_ORDER} from "./actionTypes";

export const addToCart=(payload)=>{
    return{
        type:ADD_TO_CART,
        payload
    }
}

export const submit=(payload)=>{
    return{
        type: ADD_TO_ORDER,
        payload
    }
}