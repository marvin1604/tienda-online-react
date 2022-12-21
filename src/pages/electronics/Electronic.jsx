import React from 'react'
import ProductList from '../../containers/productList/ProductList'

import electronica from "../../assets/images/tecnologia.jpg"
const Electronic = () => {
  return (
    <ProductList categori={"/categories/2"} categoriName={"Electronic"} imagen={electronica}/>
    // <ProductList categori={"category/electronics"} categoriName={"Electronica"} imagen={electronica}/>
  
    )
}

export default Electronic