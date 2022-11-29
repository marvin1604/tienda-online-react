import React, {useState, useContext} from 'react'
import '@styles/Header.scss'
import Menu from "@components/Menu"
import MyOrder from "@containers/MyOrder"
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import arrow from'@icons/flechita.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MenuMobile from './MenuMobile';


const Header = () => {
    const [toggle, setToggle]= useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);
    const {state} = useContext(AppContext);

    const handleToggle= () =>{
        setToggle(!toggle);
    }

  return (
    <nav>
        <img src={menu} alt="menu" className="menu" onClick={()=> setToggleMobile(!toggleMobile)} />
        <div className="navbar-left">
            <img src={logo} alt="logo" className="nav-logo"/>
            <ul>
                <li><a href="/">Todo</a></li>
                <li><a href="/clothes">Ropa</a></li>
                <li><a href="/electronic">Electronica</a></li>
                <li><a href="/furniture">Muebles</a></li>
                <li><a href="/shoes">Shoes</a></li>
                <li><a href="/others">Otros</a></li>
            </ul>
        </div>
        <div className="navbar-rigth">
            <ul>
                <li className="navbar-email" onClick={handleToggle}>
                    walter.rodriguez.dev@gmail.com
                </li>
                <img src={arrow} alt="flechita" className="email-arrow" onClick={handleToggle}/>
                <li 
                    className="navbar-shoping-card" 
                    onClick={() => setToggleOrders(!toggleOrders)}
                >
                    <img src={shoppingCart} alt="shoping-cart"/>
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </li>
            </ul>
        </div>
        {toggle && <Menu/>}
        {toggleOrders && <MyOrder setToggleOrders={setToggleOrders} />}
        {toggleMobile && <MenuMobile />}
    </nav>
  )
}

export default Header