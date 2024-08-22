import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
  <div className="container-fluid">
    <h1 className="navbar-brand text-white" style={{fontSize:"29px"}}>
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
          <a className="nav-link active text-white" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar
