import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import NavBar from './assets/NavBar'
import Login from './assets/Login'
import Home from './assets/Home'
import Signup from './assets/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './assets/Cart'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
