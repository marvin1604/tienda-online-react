import React from 'react'
import ProductList from "../../containers/productList/ProductList"

import ropa from "../../assets/images/ropa-mujer.png"
const clothes = () => {
  return (
    <>
    <ProductList categori={"/categories/1"} categoriName={"Clothes"} imagen={ropa}/>
    {/* <ProductList categori={"category/women's clothing"} categoriName={"Ropa Mujer"} imagen={ropa}/> */}
    
    </>
  )
}

export default clothes