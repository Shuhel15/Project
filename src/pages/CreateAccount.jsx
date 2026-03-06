import React from 'react'
import { NavLink } from 'react-router-dom'

const CreateAccount = () => {
  return (
    <>
<div className="page">

  <h1>Create your PopX account</h1>

  <div className="input-box">
    <input type="text"  required />
    <label>Full Name<span>*</span></label>
  </div>

  <div className="input-box">
    <input type="text"  required />
    <label>Phone number<span>*</span></label>
  </div>

  <div className="input-box">
    <input type="email" required />
    <label>Email address<span>*</span></label>
  </div>

  <div className="input-box">
    <input type="password"  required />
    <label>Password<span>*</span></label>
  </div>

  <div className="input-box">
    <input type="text"  />
    <label>Company name<span>*</span></label>
  </div>

  <h5>Are you an Agency?<span>*</span></h5>

  <div className="radio">
    <label>
      <input type="radio" name="agency" /> Yes
    </label>

    <label>
      <input type="radio" name="agency" /> No
    </label>
  </div>


</div>
  <NavLink to="/account">
    <button className="btn primary creat-btn">Create Account</button>
  </NavLink>
  </>
  )

}

export default CreateAccount
