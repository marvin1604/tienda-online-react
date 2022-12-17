import React, {useContext, useState} from 'react'
import "../styles/ProductItem.scss"
import AppContext from '../context/AppContext'
import AddtoCart from "@icons/bt_add_to_cart.svg"

const ProductItem = ({product}) => {
  const {addToCart} = useContext(AppContext);

  const handleCart = item=>{
    addToCart(item);
  }
  const mostrarProduct = () =>{
    console.log(product.title, product.price, product.description, product.images);
  }

  return (
    <div className="ProductItem">
        <img src={product.images} alt="" onClick={mostrarProduct}/>
        <div className="product-info">
            <div>
                <p>${product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleCart(product)}>
                <img src={AddtoCart} alt="" />
            </figure>
        </div>
    </div>

  )
}

export default ProductItem