import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "../styles/global.scss"
import Login from "../pages/Login"
import Layout from '../containers/Layout'
import RecoveryPassword from '../pages/RecoveryPassword'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route exact path = "/login" element={<Login/>} />
          <Route exact path = "/recovery-password" element={<RecoveryPassword/>} />
          <Route path= "*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>

  )
}

export default App
