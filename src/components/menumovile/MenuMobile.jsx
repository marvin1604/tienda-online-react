import React from 'react';
import './MenuMobile.scss'
import { Link } from 'wouter';

import flecha from "@icons/icon_close.png"

const MenuMobile = ({setToggleMobile}) => {
    return (
      <div className="MobileMenu">        
        <ul className="MobileMenu__categories list">
          <div>
            <li className="list__item">
              <Link className="list__link" to="/" onClick={()=> setToggleMobile(false)}>CATEGORIES</Link>
            </li>
            <img src={flecha} alt="close" className='close' onClick={()=> setToggleMobile(false)}/>
          </div>
          <li className="list__item">
            <Link className="list__link" to="/" onClick={()=> setToggleMobile(false)}>All</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/clothes" onClick={()=> setToggleMobile(false)}>Ropa</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/electronic" onClick={()=> setToggleMobile(false)}>Electronica</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/furniture" onClick={()=> setToggleMobile(false)}>Muebles</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/shoes" onClick={()=> setToggleMobile(false)}>Shoes</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/others" onClick={()=> setToggleMobile(false)}>Otros</Link>
          </li>
        </ul>
        <ul className="MobileMenu__account list">
          <li className="list__item">
            <Link className="list__link" to="/" onClick={()=> setToggleMobile(false)}>My orders</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/myaccount" onClick={()=> setToggleMobile(false)}>My account</Link>
          </li>
        </ul>
        <ul className="MobileMenu__info list">
          <li className="list__item">
            <Link className="list__link email" to="/myaccount" onClick={()=> setToggleMobile(false)} >Walter.rodriguez.dev@gmail.com</Link>
          </li>
          <li className="list__item">
            <Link className="list__link sign-out" to="/login" onClick={()=> setToggleMobile(false)} >Sign out</Link>
          </li>
        </ul>
      </div>
  
    )
    

}

export default MenuMobile