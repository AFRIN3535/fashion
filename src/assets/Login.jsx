import React from 'react'
import "./credentials.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='px-3 pt-5 loginmain'>
      <form className='loginform py-4 rounded border-secondary shadow'>
        <h3 className='mb-3 text-center'>LogIn</h3>
        <hr />
        <div className="form-floating mb-3 btn-outline-success">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>

        </div>
        <hr />

        <div className='text-end'>

          <button className='btn btn-outline-primary '>Login</button>
        </div>
        <hr />
        <h6 className='text-secondary'>don't have an account? <Link to="/Signup">SignUp</Link> </h6>

      </form>

    </div>
  )
}

export default Login
