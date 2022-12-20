import React from 'react'
import ProductList from "../../containers/ProductList"

import ropa from "../../assets/images/ropa-mujer.png"
const clothes = () => {
  return (
    <>
    <ProductList categori={"/categories/1"} categoriName={"Clothes"} imagen={ropa}/>
    </>
  )
}

export default clothes