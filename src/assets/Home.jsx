import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  // products api 
  const api = "https://fashionkart-server.onrender.com/product/getproducts"
  const [data, setData] = useState([])


  useEffect(() => {
    // fetching products from server with axios library
    const fetchProducts = async () => {
      try {
        const response = await axios.get(api)
        if (response) {
          console.log(response);
          setData(response.data.reverse())
        }
      } catch (error) {
        console.error(error);

      }
    }
    fetchProducts()
  }, [])



  return (
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
                  <a href="#" className="btn btn-primary">Add to Cart

                  </a>
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
  )
}

export default Home
