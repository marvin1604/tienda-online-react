import React, {useContext} from 'react'
import "./ProductDetails.scss"
import ProductInfo from '../../components/productInfo/ProductInfo'

import flecha from "@icons/icon_close.png"
import { Link } from 'wouter'

const ProductDetails = () => {
  return (
    <div className='container-ProductoDetail'>
      <div className="ProductDetail">
          <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link> 
          <ProductInfo />
      </div>
    </div>
  )
}

export default ProductDetails