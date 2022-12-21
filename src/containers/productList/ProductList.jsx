import React, {useEffect, useState, useContext} from 'react'
import "./ProductList.scss"
import ProductItem from "../../components/productItem/ProductItem";
import ProductDetails from '../productDetail/ProductDetails';
// import useGetProducts from '../hooks/useGetProducts';



const ProductList = ({categori, categoriName, imagen}) => {
  const [toggle, setToggle] = useState(false);
  const [productsItem, setProductsItem] = useState([])
  const [search, setSearch] = useState("")
  const API = `https://api.escuelajs.co/api/v1${categori}/products?limit=40&offset=1`;
  // const API2 = `https://fakestoreapi.com/products/${categori}`
  // const products = useGetProducts(API);
  
  //Get Products
  useEffect(async() =>{
    const response = await fetch(API);
    const data = await response.json()
    setProductsItem(data)
  },[])

  //ingreso de datos
  const searcher = (e) =>{
    setSearch(e.target.value)
  }

  // metodo filtrado
  const results = !search ? productsItem : productsItem.filter(product => product.title.toString().toLowerCase().includes(search.toLowerCase()))
  
  return (
    <section className="main-container">
      {toggle && <ProductDetails setToggle ={setToggle}/>}
      <h1 >{categoriName}</h1>
      <img src={imagen} alt="" className='imagenTop'/>
      <div className='container-input'>
        <input type="text" placeholder='Ingresa el producto a buscar' value={search} onChange={searcher}/>
      </div>      
      <div className="ProductList">
        {results.map(product =>(
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  )
}

export default ProductList