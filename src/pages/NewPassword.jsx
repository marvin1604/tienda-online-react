import React from 'react'
import "../styles/NewPassword.scss"

import logo from "@logos/logo_yard_sale.svg"
const NewPassword = () => {
  return (
    <div className="NewPassword">
        <div className="NewPassword-container">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">Crea una Nueva Contraseña</h1>
            <p className="subtitle">Ingresa una nueva contraseña</p>
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password" />
                <label for="new-password" className="label">re-Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password" />
                <input type="submit" value="Confirm" className="primary-button login-button" />
            </form>
        </div>
    </div>
  )
}

export default NewPassword