import React, {useContext} from 'react'
import "../styles/Orders.scss"
import OrdenItem from '../components/OrdenItem'
import AppContext from '../context/AppContext'

const Orders = () => {
  const {state} = useContext(AppContext);
  return (
    <div className="Orders">
        <div className="Orders-container">
            <h1 className="title">My orders</h1>
            <div className="Orders-content">
            {state.cart.map(product =>(
            <OrdenItem product={product} key={`ordersItem-${product.id}`}/>
            ))}
            </div>
        </div>
    </div>

  )
}

export default Orders