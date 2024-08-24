import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const [spinner, setSpinner] = useState(false)
  const [passToggle, setPassToggle] = useState(false)

  // signup function 
  const signupFun = async (e) => {
    e.preventDefault()
    setSpinner(true)
    try {
      const response = await axios.post("https://fashionbackend-yqpg.onrender.com/user/signup", { email, password })
      if (response) {
        toast.success("Successfully Signed Up")
        setEmail("")
        setPassword("")
        setSpinner(false)
        setTimeout(() => {
          navigate("/Login")
        }, 1200);
      }
    } catch (error) {
      console.error(error);
      setSpinner(false)
      toast.error("Please Try again or Change the email address")
    }
  }



  // password toggle Function 
  const toggleFunc = (e) => {
    if (e.target.checked) {
      setPassToggle(!passToggle)
    } else {
      setPassToggle(!passToggle)
    }
  }
  return (
    <>
      <ToastContainer />

      <div className='bg-dark'>
        <div className='px-4 pt-5 loginmain'>
          <form onSubmit={signupFun} className='loginform py-4 rounded border-none shadow bg-white'>
            <h3 className='mb-3 text-center text-success'>SignUp</h3>
            <hr />
            <div className="form-floating mb-3 ">
              <input
                type="email" required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control border-2 custom-input"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type={passToggle ? "type" : "password"}required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control border-2 custom-input"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>

            </div>
            {passToggle ? <div className="form-check mt-2">
              <input onChange={toggleFunc} className="form-check-input border-1 border-dark" type="checkbox" id="flexCheckDefault1" />
              <label className="form-check-label" htmlFor="flexCheckDefault1">
                Hide Password
              </label>
            </div> : <div className="form-check mt-2">

              <input onChange={toggleFunc} className="form-check-input border-1 border-dark" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Show Password
              </label>
            </div>}


            <hr />

            <div className='text-center'>
              {/* conditional rendering with  */}
              {spinner ? <button className="btn btn-success" style={{ width: "100%" }} type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span className="visually-hidden" role="status">Loading...</span>
              </button> : <button type='submit' className='btn bg-success text-white' style={{ width: "100%" }} >SignUp</button>
              }
            </div>
            <hr />
            <h6 className='text-secondary'>Already have an account? <Link to="/Login" className='text-decoration-none'>Login</Link> </h6>
          </form>

        </div>

      </div>
    </>
  )
}

export default Signup
