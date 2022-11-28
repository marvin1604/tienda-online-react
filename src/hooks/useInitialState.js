import { useState } from "react";

const initialState ={
    cart:[],
}

const useInitialState = () =>{
    const [state, setState] = useState(initialState);

    const addToCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    };

    const removeToCart =(payload) =>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    return{
        state,
        addToCart,
        removeToCart
    }
}

export default useInitialState;