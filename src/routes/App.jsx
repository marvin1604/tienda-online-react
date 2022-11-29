import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "@styles/global.scss"
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
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Clothes from '../pages/Clothes'
import Electronic from '../pages/Electronic'
import Furniture from "../pages/Furniture"
import Shoes from "../pages/Shoes"
import Others from "../pages/Others"

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Header/>
        <Layout>
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/checkout" element={<Checkout/>} />
            <Route path = "/createaccount" element={<CreateAccount/>} />
            <Route path = "/clothes" element={<Clothes />} />
            <Route path = "/electronic" element={<Electronic />} />
            <Route path = "/furniture" element={<Furniture />} />
            <Route path = "/shoes" element={<Shoes />} />
            <Route path = "/others" element={<Others />} />
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
    </AppContext.Provider>

  )
}

export default App
