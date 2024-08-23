import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  const [email,setEmail] = useState("")
  const[password,setPassword] =useState("")
const signupFun =async (e) => {
  e.preventDefault()
  try {
    const response = await axios.post("https://fashionbackend-yqpg.onrender.com/user/signup",{email,password})
    if(response){
      alert("Successfully signedup")
    }
  } catch (error) {
    console.error(error);
    alert("Unabled to signup")
  }
}


  return (
    <div>
      <div className='px-4 loginmain'>
        <form onSubmit={signupFun} className ='loginform py-4 rounded border-secondary'>
          <h3 className='mb-3 text-center text-success'>SignUp</h3>
          <hr />
          <div className="form-floating mb-3 ">
            <input
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>

          </div>
          <hr />

          <div className='text-end'>

            <button type='submit' className='btn btn-outline-success'>SignUp</button>
          </div>
          <hr/>
          <h6 className='text-secondary'>already have an account?<span>Login</span> </h6>
        </form>

      </div>

    </div>
  )
}

export default Signup
