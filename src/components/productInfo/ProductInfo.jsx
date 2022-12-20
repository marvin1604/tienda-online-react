import React, {useContext} from 'react'
import "./ProductInfo.scss"
import AppContext from '../../context/AppContext'

import addToCarts from "@icons/bt_add_to_cart.svg"

const ProductInfo = () => {
  const {state, addToCart} = useContext(AppContext);
  
  const handleCart = item=>{
    addToCart(item);
  }
  return (
	  <>
        <div className="ProductInfo">
          <img className='imagenProduct' src={state.producto.images} alt="bike" />
          <div className='container-info'>
              <p>{state.producto.title}</p>
              <p>Sku: {state.producto.id}</p>
              <p>Precio: ${state.producto.price}</p>
              <p>{state.producto.description}</p>
              <button className="primary-button add-to-cart-button" onClick={()=>handleCart(state.producto)} >
                  <img src={addToCarts} alt="add to cart" className='addCar'/>
                  Add to cart
              </button>
          </div>
        </div>
    </>

  )
}

export default ProductInfo