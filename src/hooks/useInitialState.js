import { useState } from "react";

const initialState ={
    cart:[],
    producto: ""
}


const useInitialState = () =>{
    const [state, setState] = useState(initialState);
    
    const products = (payload) =>{
        setState({...state,
            producto: payload
        })
    };

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
        products,
        addToCart,
        removeToCart,

    }
}

export default useInitialState;