import React from 'react'
import ProductList from "../containers/ProductList"

const clothes = () => {
  return (
    <>
    <ProductList categori={"/categories/1"} categoriName={"Clothes"}/>
    </>
  )
}

export default clothes