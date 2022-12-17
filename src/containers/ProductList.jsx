import React, {useEffect, useState, useContext} from 'react'
import "@styles/ProductList.scss"
import ProductItem from "@components/ProductItem";
import useGetProducts from '../hooks/useGetProducts';
import AppContext from '../context/AppContext';
import ProductDetails from '../containers/ProductDetails';


const ProductList = ({categori, categoriName}) => {
  const [toggle, setToggle] = useState(false);
  const API = `https://api.escuelajs.co/api/v1${categori}/products?limit=40&offset=1`;
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      {toggle && <ProductDetails setToggle ={setToggle}/>}
      <h1 >{categoriName}</h1>
      <div className="ProductList">
        {products.map(product =>(
          <ProductItem product= {product} key={product.id}/>
        ))}
      </div>
    </section>
  )
}

export default ProductList