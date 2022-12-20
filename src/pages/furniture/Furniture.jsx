import React from 'react'
import ProductList from '../../containers/ProductList'

import muebles from "../../assets/images/muebles.png"
const Furniture = () => {
  return (
    <ProductList categori={"/categories/3"} categoriName={"Furniture"} imagen={muebles}/>
  )
}

export default Furniture