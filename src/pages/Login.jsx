import React from 'react'
import "../styles/Login.scss"

const Login = () => {
  return (
    <div className="login">
        <div className="form-container">
            <h1 className="title">Crea un Nuevo Usuario</h1>
            <form action="" className="form">
                <div>
                    <label for="name" className="label">Nombre</label>
                    <input type="text" id="name" placeholder="Claudia" className="input input-name"/>

                    <label for="email" className="label">Email</label>
                    <input type="text" id="email" placeholder="claudia@gmail.com" className="input input-email"/>
                
                    <label for="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="*******" className="input input-password"/>
                </div>

                <input type="submit" value="Crear" className="primary-button login-button"/>
            </form>
        </div>
    </div>
  )
}

export default Login