import React from 'react'
import ProductList from '../../containers/productList/ProductList'

import shoes from "../../assets/images/zhoes.png"

const Shoes = () => {
  return (
    <ProductList categori={"/categories/4"} categoriName={"Shoes"} imagen={shoes}/>
    // <ProductList categori={"category/jewelery"} categoriName={"Joyas"} imagen={shoes}/>
  )
}

export default Shoes