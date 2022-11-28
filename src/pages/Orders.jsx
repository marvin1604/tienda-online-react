import React from 'react'
import "../styles/Orders.scss"
import OrdenItem from '../components/OrdenItem'

const Orders = () => {
  return (
    <div className="Orders">
        <div className="Orders-container">
            <h1 className="title">My orders</h1>
            <div className="Orders-content">
                <OrdenItem />
            </div>
        </div>
    </div>

  )
}

export default Orders