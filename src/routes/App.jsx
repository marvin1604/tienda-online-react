import React from 'react'
import { Route} from 'wouter'
// import Provider, { AppContext } from "../hooks/Provider"
import "@styles/global.scss"
import Login from "../pages/login/Login"
import Layout from '../containers/layout/Layout'
import RecoveryPassword from '../pages/RecoveryPassword'
import Home from '../pages/home/Home'
import NotFound from '../pages/notfound/NotFound'
import Checkout from "../pages/Checkout/Checkout"
import CreateAccount from "../pages/createaccount/CreateAccount"
import Header from '../components/Header/Header'
import MyAccount from "../pages/myaccount/MyAccount"
import NewPassword from "../pages/newpassword/NewPassword"
import Orders from "../pages/orders/Orders"
import PasswordRecovery from "../pages/PasswordRecovery"
import SendEmail from "../pages/SendEmail"
import Clothes from '../pages/clothes/Clothes'
import Electronic from '../pages/electronics/Electronic'
import Furniture from "../pages/furniture/Furniture"
import Shoes from "../pages/shoes/Shoes"
import Others from "../pages/others/Others"
import Detalles from '../pages/detalles/Detalles'
import useInitialState from "../hooks/useInitialState"
import AppContext from '../context/AppContext'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
        <Header/>
        <Layout>
            <Route path = "/" component={Home} />
            <Route path='/detalles' component={Detalles}/>
            <Route path = "/checkout" component={Checkout} />
            <Route path = "/createaccount" component={CreateAccount} />
            <Route path = "/clothes" component={Clothes} />
            <Route path = "/electronic" component={Electronic} />
            <Route path = "/furniture" component={Furniture} />
            <Route path = "/shoes" component={Shoes} />
            <Route path = "/others" component={Others} />
            <Route path = "/login" component={Login} />
            <Route path = "/myaccount" component={MyAccount}/>
            <Route path = "/newpassword" component={NewPassword}/>
            <Route path = "/orders" component={Orders}/>
            <Route path = "/passwordrecovery" component={PasswordRecovery}/>
            <Route path = "/recovery-password" component={RecoveryPassword} />
            <Route path = "/sendemail" component={SendEmail} />
            <Route path= "/*" component={NotFound}/>
        </Layout>
    </AppContext.Provider>

  )
}

export default App
