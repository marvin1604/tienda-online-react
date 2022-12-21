import React, {useState, useContext} from 'react'
import { Link } from 'wouter';
import './Header.scss'
import AppContext from '../../context/AppContext';

import Menu from "../Menu/Menu"
import MyOrder from "../../containers/myorder/MyOrder"
import MenuMobile from '../menumovile/MenuMobile';

import menu from '@icons/icon_menu.svg';
import logo from '../../assets/logos/logo tienda.jpg';
import arrow from'@icons/flechita.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';




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
                <li><Link to="/">Todo</Link></li>
                <li><Link to="/clothes">Ropa</Link></li>
                <li><Link to="/electronic">Electronica</Link></li>
                <li><Link to="/furniture">Muebles</Link></li>
                <li><Link to="/shoes">Zapatillas</Link></li>
                <li><Link to="/others">Otros</Link></li>
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
        {toggleMobile && <MenuMobile setToggleMobile={setToggleMobile}/>}
    </nav>
  )
}

export default Header