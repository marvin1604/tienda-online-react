import React from 'react'
import "../styles/ProductList.scss"
import ProductItem from "../components/ProductItem"

const ProductList = () => {
  return (
    <section className="main-container">
        <div className="ProductList">
            <ProductItem />
        </div>
    </section>
  )
}

export default ProductList