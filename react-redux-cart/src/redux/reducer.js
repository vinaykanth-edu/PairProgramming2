import {ADD_TO_CART} from "./actionTypes";
import data from '../data.json';

const initState = {
    data : data,
    cartArray:[]
}
const reducer = (state = initState, {type, payload}) => {
    switch(type){
        case ADD_TO_CART:{
            let item=state.data.find(item=>item.id==payload)
            return{
                ...state,
                cartArray:[...state.cartArray,item]
            }
        }
        default:{
            return {...state}
        }
    }  
}

export default reducer;