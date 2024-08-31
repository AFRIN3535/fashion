import React, { useContext } from 'react'
import { cartContext } from '../App'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Cart = () => {
  const { cart, setCart } = useContext(cartContext)


// price increment and decrement functions 
const pricInc = (itemId)=>{
  const updated = cart.map((item)=>{
    if(item._id === itemId){
      item.qty += 1
    }
    return item
  })

  setCart(updated)
}

const pricDec = (itemId)=>{
  const updated = cart.map((item)=>{
    if(item._id === itemId){
      item.qty -= 1
    }
    return item
  })

  setCart(updated)
}

// removing items from cart function 
const removeItem = (remId)=>{
  const filteredItems = cart.filter((item)=> item._id !== remId)
  setCart(filteredItems)
  toast.success("Item removed from Cart")
}


  return (
    <>
    <ToastContainer position="top-center"/>
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
                  <h5 className='py-2 mb-0 text-secondary'>{item.description}</h5>
                  <div className='d-flex flex-column gap-2 py-2 pb-3 text-center' style={{width:"7rem"}}>
                    <h5 className='text-secondary m-0'>Qty</h5>
                    <div className='d-flex gap-3 align-items-center'>
                  <button  onClick={()=> pricDec(item._id)} disabled={item.qty === 1 && "true"} className='btn border-2 fw-bold fs-5 border-secondary d-flex align-items-center justify-content-center' style={{ height: "2.3rem" ,width:"2.3rem" }}>-</button>
                  <h5 className=''>{item.qty}</h5>
                  <button onClick={()=> pricInc(item._id)} className='btn border-2 fw-bold fs-5 border-secondary d-flex align-items-center justify-content-center' style={{ height: "2.3rem" ,width:"2.3rem" }}>+</button>
                    </div>
                  </div>

                  <h5 className='fw-bold pt-0 pb-2 '>${item.price.toFixed(2) * item.qty}</h5>
                  <button onClick={()=>{
                    toast.success("Order placed successfully")
                  }} className='btn btn-outline-dark fw-bold ' style={{ marginRight: "1rem" }}>BUY NOW</button>
                  <button onClick={()=> removeItem(item._id)} className='btn btn-outline-danger fw-bold'>REMOVE</button>

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
    </>
  )
}

export default Cart
