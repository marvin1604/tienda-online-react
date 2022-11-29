import React from 'react'
// import Header from '../components/Header'
import "../styles/Header.scss"
import ProductList from "../containers/ProductList"
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <>
     <Carrusel/>
     <ProductList categori={""}/>
    </>
  )
}

export default Home