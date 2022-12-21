import React from 'react'
import { Link } from 'wouter'
import "./Menu.scss"

const Menu = () => {
  return (
    <div className="Menu">
        <ul>
            <li>
                <Link to="/orders" className="title">My orders</Link>
            </li>
            <li>
                <a href="/myaccount">My account</a>
            </li>
            <li>
                <a href="/login">Sign out</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu