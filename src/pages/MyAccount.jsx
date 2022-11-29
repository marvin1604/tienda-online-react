import React from 'react'
import "../styles/MyAccount.scss"

const MyAccount = () => {
  return (
    <div className="MyAccount">
        <div className="MyAccount-container">
            <h1 className="title">Mi Cuenta</h1>
            <form action="/newpassword" className="form">
                <div>
                    <label for="name" className="label">Name</label>
                    <p className="value">Walter Rodriguez</p>
                    <label for="email" className="label">Email</label>
                    <p className="value">walter.rodriguez.dev@gmail.com</p>
                    <label for="password" className="label">Password</label>
                    <p className="value">*********</p>
                </div>
                <input type="submit" value="Edit" className="secondary-button login-button" />
            </form>
        </div>
    </div>

  )
}

export default MyAccount