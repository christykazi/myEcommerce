import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
 <section className='home-wrapper-1 py-5'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative p-3">
            <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>Phone 12 pro max</h5>
              <p>From $699 or $21.62/mo.</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className='goal d-flex flex-wrap align-items-center '>
        <div className="small-banner position-relative p-1">
            <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h4>IPHONE PROS.</h4>
              <h5>Phone 12 pro max</h5>
              <p>From $699 or <br />$21.62/mo.</p>
            
            </div>
          </div>
          <div className="small-banner position-relative p-1">
            <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h4>NEW ARRIVAL</h4>
              <h5>IPAD AIR</h5>
              <p>From $699 <br /> or $21.62/mo.</p>
            
            </div>
          </div>
          <div className="small-banner position-relative p-1">
            <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h4>Best sales</h4>
              <h5>Phone 12 pro max</h5>
              <p>From $699 <br />or $21.62/mo.</p>
            
            </div>
            
          </div>
          <div className="small-banner position-relative p-1">
            <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h4> PROS.</h4>
              <h5>Phone 12 pro max</h5>
              <p>From $699 <br /> or $21.62/mo.</p>
            
            </div>
            
          </div>
    </div>
        </div>
      </div>
    </div>
  </section>
  <section className='home-wrapper-2 py-5 '>
<div className="container-xxl">
  <div className="row">
    <div className="col-12">
      <div className="services d-flex align-items-center justify-content-between  gap-15">
       <div className='d-flex align-items-center gap-15 '>
        <img src="images/service.png" alt="services" />
        <div>
          <h6>Free  Shipping</h6>
          <p className='mb-0'>from all Orders above $10</p>
        </div>
       </div>

       <div className='d-flex align-items-center gap-15'>
        <img src="images/service-03.png" alt="services" />
        <div>
          <h6>Support 24/7</h6>
          <p className='mb-0'>Shop with an expert</p>
        </div>
       </div>

      

       <div className='d-flex align-items-center gap-15'>
        <img src="images/service-04.png" alt="services" />
        <div>
          <h6>Affordable Prices</h6>
          <p className='mb-0'>Get  Factory default Price</p>
        </div>
       </div>


       <div className='d-flex align-items-center gap-15'>
        <img src="images/service-02.png" alt="services" />
        <div>
          <h6>Daily Surprise Offers</h6>
          <p className='mb-0'>Save upto 25z5 off</p>
        </div>
       </div>

       <div className='d-flex align-items-center gap-15'>
        <img src="images/service-05.png" alt="services" />
        <div>
          <h6> Secure Payments</h6>
          <p className='mb-0'>100% Protected </p>
        </div>
       </div>
      </div>
    </div>
  </div>
</div>
  </section>
  <section className="home-wrapper-2 py-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
        <div className="categories d-flex justify-content-between flex-wrap align-items-center">

        <div className='d-flex gap-1 align-items-center'>
        
          <div>
            <h6>Cameras</h6>
            <p>20 Items</p>
          </div>
          <img src="images/camera.jpg" alt="camera" />
        </div>

        <div className='d-flex gap-1 align-items-center'>
          <div>
            <h6>Smart Watches</h6>
            <p>20 Items</p>
          </div>
          <img src="images/headphone.jpg" alt="camera" />
        </div>       

        <div className='d-flex gap-1 align-items-center'>
          <div>
            <h6>Smart Tv</h6>
            <p>35 Items</p>
          </div>
          <img src="images/tv.jpg" alt="tv" />
        </div>       
      
        <div className='d-flex gap-1 align-items-center'>
          <div>
            <h6>music & gaming</h6>
            <p>20 Items</p>
          </div>
          <img src="images/camera.jpg" alt="camera" />
        </div>
        

        <div className='d-flex gap-1 align-items-center'>
        
        <div>
          <h6>Cameras</h6>
          <p>20 Items</p>
        </div>
        <img src="images/camera.jpg" alt="camera" />
      </div>

      <div className='d-flex gap-1 align-items-center'>
        <div>
          <h6>Smart Watches</h6>
          <p>20 Items</p>
        </div>
        <img src="images/headphone.jpg" alt="camera" />
      </div>       

      <div className='d-flex gap-1 align-items-center'>
        <div>
          <h6>Smart Tv</h6>
          <p>35 Items</p>
        </div>
        <img src="images/tv.jpg" alt="tv" />
      </div>       
    
      <div className='d-flex gap-1 align-items-center'>
        <div>
          <h6>music & gaming</h6>
          <p>20 Items</p>
        </div>
        <img src="images/camera.jpg" alt="camera" />
      </div>
        

        </div>

         </div>

        
      </div>
    </div>
  </section>
    </>
 
  )
}

export default Home