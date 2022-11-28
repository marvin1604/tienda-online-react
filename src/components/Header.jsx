import React from 'react'
import "../styles/Header.scss"
const Header = () => {
  return (
    <nav>
        <img src="/icons/icon_menu.svg" alt="menu" className="menu"/>
        <div className="navbar-left">
            <img src="/logos/logo_yard_sale.svg" alt="logo" className="logo"/>
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
                <img src="/icons/flechita.svg" alt="flechita" className="email-arrow"/>
                <li className="navbar-shoping-card">
                    <img src="icons/icon_shopping_cart.svg" alt="shoping-cart"/>
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header