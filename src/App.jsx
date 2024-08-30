import { createContext, useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import NavBar from './assets/NavBar'
import Login from './assets/Login'
import Home from './assets/Home'
import Signup from './assets/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './assets/Cart'
import axios from 'axios'

export const cartContext = createContext()

function App() {
  const [cart , setCart] = useState([])
  const [data, setData] = useState([])

  const api = "https://fashionkart-server.onrender.com/product/getproducts"

  useEffect(() => {
    // fetching products from server with axios library
    const fetchProducts = async () => {
      try {
        const response = await axios.get(api)
        if (response) {

          setData(response.data.reverse().splice(1, 28))
        }
      } catch (error) {
        console.error(error);

      }
    }
    fetchProducts()
  }, [])

  return (
    <cartContext.Provider value={{cart , setCart , data , setData}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
