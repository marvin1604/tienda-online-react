import React from 'react'
import ProductList from '../../containers/productList/ProductList'
import Circulo from "../../components/circulos/Circulos"
import "./Others.css"

const Others = () => {
  return (
    <div className='Others'>
      <Circulo/>
      <ProductList categori={"/categories/5"} categoriName={"Others"}/>
    </div>
  )
}

export default Others