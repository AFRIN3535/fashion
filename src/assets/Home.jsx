 
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../App'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Home = () => {
  // products api 
 
  const { cart, setCart , data  } = useContext(cartContext)
  const [productId, setProductId] = useState([])
 


  // items adding to the cart function 
  const cartFunc = (itemId) => {
    const product = data.find((item) => item._id === itemId)
    setCart([...cart, { ...product, qty: 1 }])
    toast.success("Item added to the cart")
  }

  // mapping product ids to new Array
  useEffect(() => {
    const ids = cart.map((item) => item._id)
    setProductId(ids)
  }, [cart])



  return (
    <>
 <ToastContainer  position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastStyle={{ margin: '0 auto', width: '18rem' }}/>
    <div className='container-fluid text-center mt-5  pt-5'>
      <div style={{ display: "inline-block" }}>
        <h4 className='  text-center' id='latest-title'>Latest Products</h4>
      </div>

      <div className='row row-card px-2 row-gap-3 mt-3'>

        {data.length ?
          <>{data.map((item) => (
            <div className="col-12 col-md-4 col-lg-3  d-flex justify-content-center" key={item._id}>
              <div className="card shadow border-none" style={{ width: "18rem" }}>
                <img src={item.image} className="card-img-top product-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">{item.title.substring(0, 12)}</h5>
                  {productId.includes(item._id) ?
                    <Link to="/Cart" className="btn btn-success">Go to Cart

                    </Link> :
                    <button onClick={() => cartFunc(item._id)} className="btn btn-primary">Add to Cart
                    </button>
                  }
                </div>
              </div></div>
          ))}</>
          : <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}><div>
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          </div>}
      </div>
    </div>
    </>
  )
}

export default Home
