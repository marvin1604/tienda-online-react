import React from 'react'
import ProductList from '../containers/ProductList'

import shoes from "../assets/images/zhoes.png"

const Shoes = () => {
  return (
    <ProductList categori={"/categories/4"} categoriName={"Shoes"} imagen={shoes}/>
  )
}

export default Shoes