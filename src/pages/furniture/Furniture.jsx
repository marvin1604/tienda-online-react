import React from 'react'
import ProductList from '../../containers/productList/ProductList'

import muebles from "../../assets/images/muebles.png"
const Furniture = () => {
  return (
    <ProductList categori={"/categories/3"} categoriName={"Furniture"} imagen={muebles}/>
    // <ProductList categori={"category/men's clothing"} categoriName={"Ropa Varon"} imagen={muebles}/>
    )
}

export default Furniture