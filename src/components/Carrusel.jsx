import React from 'react'
import "../styles/Carrusel.scss"

import banner1 from "@images/banner1.png"
import banner2 from "@images/banner2.jpg"
import banner3 from "@images/banner3.jpg"

const Carrusel = () => {
  return (
    <div className='container-carrusel'>
      <div className="slider">
        <ul>
          <li>
            <img src={banner1}/>
          </li>
          <li>
          <img src={banner2}/>
          </li>
          <li>
          <img src={banner3}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Carrusel