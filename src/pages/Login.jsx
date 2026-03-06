import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="page">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <div className="form">

      <div className="input-box">
        <input type="email"  />
        <label>Email Address</label>
      </div>

      <div className="input-box">
        <input type="password"  />
        <label>Password</label>
      </div>

    </div>

      <NavLink to="/account">
      <button className="btn disabled">Login</button>
      </NavLink>
    </div>
  )
}

export default Login
