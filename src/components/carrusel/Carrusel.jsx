import React from 'react'
import "./Carrusel.scss"

import banner1 from "@images/banner1.png"
import banner2 from "@images/banner2.jpg"
import banner3 from "@images/banner3.jpg"
import { Link } from 'wouter'

const Carrusel = () => {
  return (
    <div className='container-carrusel'>
      <div className="slider">
        <ul>
          <li>
            <Link to="/shoes"><img src={banner1}/></Link>
          </li>
          <li>
          <Link to="/electronic">
            <img src={banner2}/>
          </Link>
          </li>
          <li>
          <Link to="/others">
            <img src={banner3}/>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Carrusel