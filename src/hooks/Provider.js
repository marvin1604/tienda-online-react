import React, { createContext, useState } from "react";

const initialState = {
    cart:[],
    items:[]
}

const Provider = (props) =>{
    const [state,setState] = useState({initialState});
    const producto = (payload) =>{
        setState({
            items: [payload]
        })
    }
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
    return (
        <div>
            <AppContext.Provider 
                value={{
                    producto,
                    addToCart,
                    removeToCart,
                    state,
                    setState
                    }}>
                {props.children}
            </AppContext.Provider>
        </div>
    )
}
export default Provider;
export const AppContext = createContext()
