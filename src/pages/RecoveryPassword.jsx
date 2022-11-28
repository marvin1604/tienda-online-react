import React from 'react'
import "../styles/RecoveryPassword.scss"

import logo from "@logos/logo_yard_sale.svg"
const RecoveryPassword = () => {
  return (
    <div className="recovery-password">
        <div className="form-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title">Crea una nueva Contraseña</h1>
            <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
            <form action="" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*******" className="input input-password"/>
            
                <label for="new-password" className="label">Re-enterPassword</label>
                <input type="password" id="new-password" placeholder="*******" className="input input-password"/>

                <input type="submit" value="Confirmar" className="primary-button login-button"/>
            </form>
        </div>
    </div>
  )
}

export default RecoveryPassword