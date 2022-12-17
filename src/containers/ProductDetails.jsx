import React from 'react'
import "../styles/ProductDetails.scss"
import ProductInfo from '../components/ProductInfo'

import flecha from "@icons/icon_close.png"
const ProductDetails = ({setToggle}) => {
  const handleClose =() => setToggle(false);
  return (
    <aside className="ProductDetail">
        <div className="ProductDetail-close">
            <img src={flecha} alt="close" onClick={handleClose}/>
        </div>
        <ProductInfo />
    </aside>
  )
}

export default ProductDetails