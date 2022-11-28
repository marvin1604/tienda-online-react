import React, {useEffect, useState} from 'react'
import "@styles/ProductList.scss"
import ProductItem from "@components/ProductItem";
import useGetProducts from '../hooks/useGetProducts';
import axios from 'axios'

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
        <div className="ProductList">
        {products.map(product =>(
          <ProductItem product= {product} key={product.id}/>
        ))}
        </div>
    </section>
  )
}

export default ProductList