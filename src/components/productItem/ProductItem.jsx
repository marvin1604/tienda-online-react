import React, {useContext} from 'react'
import "./ProductItem.scss"
import AddtoCart from "@icons/bt_add_to_cart.svg"
import AppContext from '../../context/AppContext'
import {Link} from "wouter"

const ProductItem = ({product}) => {
  const {addToCart, products} = useContext(AppContext);

  const handleCart = item=>{
    addToCart(item);
  }
  const handleProduct = item=>{
    products(item);
  }

  return (
    <div className="ProductItem">
        <Link to='/detalles' onClick={() => handleProduct(product)}><img src={product.images} alt="" /></Link>
        <div className="product-info">
            <Link to='/detalles' onClick={() => handleProduct(product)}>
              <div>
                  <p>${product.price}</p>
                  <p>{product.title}</p>
              </div>              
            </Link>
            <figure onClick={() => {
              handleCart(product);
            }}>
                <img src={AddtoCart} alt="" />
            </figure>
        </div>
    </div>

  )
}

export default ProductItem