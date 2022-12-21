import React, {useContext} from 'react'
import "./MyOrder.scss"
import AppContext from '../../context/AppContext'
import OrdenItem from '../../components/orderitem/OrdenItem'

import arrow from "@icons/flechita.svg"
import { Link } from 'wouter'

const MyOrder = ({setToggleOrders}) => {
    const {state} = useContext(AppContext)

    /*Funcion acumuladora de precios de mi orden */
    const sumTotal = () =>{
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum;
    }
    const handleClose =() => setToggleOrders(false);

    return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src={arrow} alt="arrow" onClick={handleClose}/>
            <p className="title-order">My order</p>
        </div>
        <div className="my-order-content">
            {state.cart.map(product =>(
            <OrdenItem 
                product={product} 
                key={`orderItem-${product.id}`}
            />
            ))}
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <Link to="/orders">
                <div className="orders">
                    <p>Checkout</p> 
                </div>
            </Link>
            
        </div>
    </aside>
  )
}

export default MyOrder