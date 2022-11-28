import React from 'react'
import '@styles/Header.scss'

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import arrow from'@icons/flechita.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
const Header = () => {
  return (
    <nav>
        <img src={menu} alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo"/>
            <ul>
                <li><a href="">All</a></li>
                <li><a href="">Clothes</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Furnitures</a></li>
                <li><a href="">Toys</a></li>
                <li><a href="">Others</a></li>
            </ul>
        </div>
        <div className="navbar-rigth">
            <ul>
                <li className="navbar-email">claudia@gmail.com</li>
                <img src={arrow} alt="flechita" className="email-arrow"/>
                <li className="navbar-shoping-card">
                    <img src={shoppingCart} alt="shoping-cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header