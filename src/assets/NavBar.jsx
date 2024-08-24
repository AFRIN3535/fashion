import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
  <div className="container-fluid px-3">
    <h1 className="navbar-brand text-white"  style={{fontSize:"29px"}}>
      Fashion
    </h1>
    <button 
      className="navbar-toggler bg-white"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active text-white" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link to="/Cart" className="nav-link text-white" href="#">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link text-white" href="#">
            LogIn
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SignUp" className="nav-link text-white">
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar
