import React from 'react';
import closeIcon from '@icons/icon_close.png'
import '@styles/MenuMobile.scss'

const MenuMobile = () => {
    return (
      <div className="MobileMenu">
        
        <ul className="MobileMenu__categories list">
          <li className="list__item">
            <a className="list__link" href="/">CATEGORIES</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/">All</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/clothes">Ropa</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/electronic">Electronica</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/furniture">Muebles</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/shoes">Shoes</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/others">Otros</a>
          </li>
        </ul>
        <ul className="MobileMenu__account list">
          <li className="list__item">
            <a className="list__link" href="/">My orders</a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/myaccount">My account</a>
          </li>
        </ul>
        <ul className="MobileMenu__info list">
          <li className="list__item">
            <a className="list__link email" href="/myaccount" >Walter.rodriguez.dev@gmail.com</a>
          </li>
          <li className="list__item">
            <a className="list__link sign-out" href="/login" >Sign out</a>
          </li>
        </ul>
      </div>
  
    )
    

}

export default MenuMobile