import React, { useContext } from 'react'
import { cartContext } from '../App'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, setCart } = useContext(cartContext)
  return (
    <div className='container-fluid px-3'  >
      <div className='row pt-5 text-center ' style={{ marginTop: "2rem" }}>
        {cart.length ? <>

          {cart.map((item) => {
            return (
              <React.Fragment key={item._id}>
                <div className='col-12 col-md-4 '>
                  <img src={item.image} className='cart-images rounded' alt="cart-img" />
                </div>
                <div className='col-12 col-md-8  text-start'>
                  <h6 className='text-secondary '>{item.category}</h6>
                  <h4 className='pb-1 mb-0'>{item.title}</h4>
                  <h5 className='fw-bold py-2 '>${item.price.toFixed(2)}</h5>
                  <button className='btn btn-outline-dark fw-bold ' style={{ marginRight: "1rem" }}>BUY NOW</button>
                  <button className='btn btn-outline-danger fw-bold'>REMOVE</button>

                </div>

                <hr className='my-5' />
              </React.Fragment>
            )
          })}
        </> : <div className='d-flex flex-column gap-2 justify-content-center align-items-center fw-bold fs-5 text-center' style={{ height: "80vh" }}>Cart Is Empty
          <Link to="/" className="btn bg-primary text-white">Go to Home</Link>
        </div>}


      </div>
    </div>
  )
}

export default Cart
