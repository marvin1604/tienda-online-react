import { useState } from "react";

const initialState ={
    cart:[]
}

const initialStateCategory={
    catego:["1"]
}

const useInitialState = () =>{
    const [state, setState] = useState(initialState);
    const [categori, setCategori] = useState(initialStateCategory);

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

    const categoriSet = (payload) =>{
        setCategori({
            ...categori,
            catego: [categori.catego, payload]
        })
    }


    return{
        state,
        addToCart,
        removeToCart,
        categoriSet,
        categori
    }
}

export default useInitialState;