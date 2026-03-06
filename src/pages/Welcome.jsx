import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  // const nav = useNavigate();
  return (
    <div className="welcome page">
      <div className="wel-pg">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <NavLink to="/create">
      <button className="btn primary">Create Account</button>
      </NavLink>

      <NavLink to="/login">
      <button className="btn light">Already Registered? Login</button>
      </NavLink>
    </div>
    </div>
  )
}

export default Welcome
