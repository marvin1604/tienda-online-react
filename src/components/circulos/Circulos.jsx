import React from 'react'
import "./Circulo.scss"
import { Link } from 'wouter'

const Circulos = () => {
  return (
    <div className='container-circulos'>
      <Link to="/clothes">
          <figure>
              <img src="https://home.ripley.com.pe/minisitios/home/c/22/12/01/CAT_NAVIDAD/webp/5.webp" alt="" />
              <figcaption>Ropa</figcaption>
          </figure>
      </Link>
        <Link to="/electronic">
          <figure>
              <img src="https://home.ripley.com.pe/minisitios/home/c/22/12/01/CAT_NAVIDAD/webp/4.webp" alt="" />
              <figcaption>Electronica</figcaption>
          </figure>
        </Link>
        <Link to="/shoes">
          <figure>
              <img src="https://home.ripley.com.pe/minisitios/home/c/22/12/01/CAT_NAVIDAD/webp/2.webp" alt="" />
              <figcaption>Shoes</figcaption>
          </figure>
        </Link>
        <Link to="/furniture">
        <figure>
            <img src="https://home.ripley.com.pe/minisitios/home/c/22/12/01/CAT_NAVIDAD/webp/3.webp" alt="" />
            <figcaption>Muebles</figcaption>
        </figure>
        </Link>
    </div>
  )
}

export default Circulos