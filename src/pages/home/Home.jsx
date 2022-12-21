import React from 'react'
import ProductList from "../../containers/productList/ProductList"
import Circulos from "../../components/circulos/Circulos"
import Carrusel from '../../components/carrusel/Carrusel'

const Home = () => {
  return (
    <>
     <Carrusel/>
     <Circulos/>
     <ProductList categori={""}/>
    </>
  )
}

export default Home