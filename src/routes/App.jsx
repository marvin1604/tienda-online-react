import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "../styles/global.scss"
import Login from "../pages/Login"
import Layout from '../containers/Layout'
import RecoveryPassword from '../pages/RecoveryPassword'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Checkout from "../pages/Checkout"
import CreateAccount from "../pages/CreateAccount"
import Header from '../components/Header'
import MyAccount from "../pages/MyAccount"
import NewPassword from "../pages/NewPassword"
import Orders from "../pages/Orders"
import PasswordRecovery from "../pages/PasswordRecovery"
import SendEmail from "../pages/SendEmail"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Layout>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/checkout" element={<Checkout/>} />
          <Route path = "/CreateAccount" element={<CreateAccount/>} />
          <Route path = "/login" element={<Login/>} />
          <Route path = "/myaccount" element={<MyAccount/>}/>
          <Route path = "/newpassword" element={<NewPassword/>}/>
          <Route path = "/orders" element={<Orders/>}/>
          <Route path = "/passwordrecovery" element={<PasswordRecovery/>}/>
          <Route path = "/recovery-password" element={<RecoveryPassword/>} />
          <Route path = "/sendemail" element={<SendEmail/>} />
          <Route path= "*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
