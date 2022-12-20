import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'
import "./OrderItem.scss"

import close from '@icons/icon_close.png'

const OrdenItem = ({product}) => {
  const {removeToCart} = useContext(AppContext);

  const handleRemove = product =>{
    removeToCart(product);
  }
  return (
    <div className="OrderItem">
        <figure>
            <img src={product.images} alt="bike" />
        </figure>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <img src={close} alt="close" onClick={() => handleRemove(product)}/>
    </div>
  )
}

export default OrdenItem