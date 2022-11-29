import React, {useRef} from 'react'
import "@styles/Login.scss"

import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
  const form = useRef(null)
  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   const formData = new FormData(form.current);
  //   const data ={
  //     username: formData.get('email'),
  //     password: formData.get('password')
  //   }
  //   console.log(data)
  // }

  return (
    <div className="login">
        <div className="login-container">
          <img src={logo} alt="" className="logo"/>
            <h1 className="title">Ingresa a tu cuenta</h1>
            <form action="/" className="form" ref={form}>
              <label for="email" className="label">Correo Electronico</label>
              <input type="text" name="email" placeholder="walter@gmail.com" className="input input-email"/>
              <label for="password" className="label">Contraseña</label>
              <input type="password" name="password" placeholder="*******" className="input input-password"/>
              <button className="primary-button login-button">Iniciar Sesion</button>
              <a href="/passwordrecovery">Olvide mi Contraseña</a>
            </form>
            <form action="/createaccount">
              <button className='secondary-button signup-button'>Crear Cuenta</button>
            </form>
        </div>
    </div>
  )
}

export default Login