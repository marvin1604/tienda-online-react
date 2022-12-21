import React, {useRef, useState} from 'react'
import "./Login.scss"
import { Link } from 'wouter'
import Input from "../../components/input/Input"
import logo from '@logos/logo_yard_sale.svg'


const Login = () => {
  const [user, setUser]= useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setpasswordError] = useState(false)

  function handleChange(name,value){
    if(name=="usuario"){
      //variable para almacenar
      setUser(value)
    }else{
      if(value.length<6){
        setpasswordError(true)
      }else{
        setpasswordError(false)
        setPassword(value)
      }
    }
  }
  function handleSubmit(){
    let account = {user, password}
    if(account) console.log(account)
  }

  return (
    <div className="login">
        <div className="login-container">
          <img src={logo} alt="" className="logo"/>
            <h1 className="title">Ingresa a tu cuenta</h1>
              <label for="email" className="label">Correo Electronico</label>
              <Input 
                attribute={{
                  id:"usuario",
                  name:"usuario",
                  type:"text",
                  placeholder:"ingrese su usuario"
                }}
                handleChange={handleChange}
              />
              <label for="password" className="label">Contraseña</label>
              <Input 
                attribute={{
                  id:"contraseña",
                  name:"contraseña",
                  type:"password",
                  placeholder:"ingrese su constraseña"
                }}
                handleChange={handleChange}
                param={passwordError}
              />
              <Link to="/">
                <button className="primary-button login-button" onClick={handleSubmit}>Iniciar Sesion</button>
              </Link>
              
              <a href="/passwordrecovery">Olvide mi Contraseña</a>
            <form action="/createaccount">
              <button className='secondary-button signup-button'>Crear Cuenta</button>
            </form>
        </div>
    </div>
  )
}

export default Login