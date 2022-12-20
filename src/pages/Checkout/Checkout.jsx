import React from 'react'
import "./Checkout.scss"
import OrdenItem from '../../components/orderitem/OrdenItem'

const Checkout = () => {
  return (
    <div className="Checkout">
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <p>
                        <span>03.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                </div>
            </div>
            <OrdenItem />
        </div>
    </div>

  )
}

export default Checkout 