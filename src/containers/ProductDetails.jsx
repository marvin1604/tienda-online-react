import React from 'react'
import "../styles/ProductDetails.scss"

const ProductDetails = () => {
  return (
    <aside className="ProductDetail">
        <div className="ProductDetail-close">
            <img src="./icons/icon_close.png" alt="close" />
        </div>
        <ProductInfo />
    </aside>
  )
}

export default ProductDetails