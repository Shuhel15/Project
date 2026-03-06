
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Account from './pages/Account'
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateAccount/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

