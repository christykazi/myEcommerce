import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCart from '../components/BlogCart'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import {services} from "../utils/Data"

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5 ">
    <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative ">
            <img src="
            https://cdn.dribbble.com/users/1048253/screenshots/15511250/media/0f08835e3f45e0de3ab59f6967d76b8b.png?resize=320x240&vertical=center
            " className='img-fluid rounded-3' alt="main banner" />
           {/*  <img src=" https://cdn.dribbble.com/users/6289059/screenshots/17336314/media/217c7afaeb899619ea386b614c98f1aa.jpg?resize=768x576&vertical=center" alt="" /> */}
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
             
              <p>From $699 or $21.62/mo.</p>
              <Link className='upp button '>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className="col-6">
        <div className='goal d-flex flex-wrap align-items-center '>
        <div className="small-banner position-relative p-1">
            <img src="https://cdn.dribbble.com/users/1038001/screenshots/15233644/media/9acd8597fd5a9364f43b1935f059231a.png?resize=400x300&vertical=center" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
            <h5>Phones</h5>
              <p>From $699 or $21.62/mo.</p>
            
            </div>
          </div>
          <div className="small-banner position-relative p-1">
            <img src="https://cdn.dribbble.com/userupload/6321294/file/still-cd769bc3ea5b5fae1c32ba68ccf1caad.png?resize=320x240&vertical=center" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h5>LAPTOP</h5>
              <p>From $699  or $21.62/mo.</p>
            
            </div>
          </div>
          <div className="small-banner position-relative p-1">
            <img src="https://cdn.dribbble.com/userupload/3136755/file/original-c4a26656abe0ef52ad5591a30727b089.png?resize=320x240&vertical=center" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h5>HEADSET</h5>
             
              <p>From $699 or $21.62/mo.</p>
            
            </div>
            
          </div>
          <div className="small-banner position-relative p-1">
            <img src="https://cdn.dribbble.com/userupload/10474831/file/original-858ab2aaf6da12d7ddf6498f8ffe2f1f.png?resize=320x240&vertical=center" className='img-fluid rounded-3' alt="main banner" />
            <div className="small-banner-content position-absolute">
              <h5>I-PAD</h5>
              <p>From $699 or $21.62/mo.</p>
            
            </div>
            
          </div>
    </div>
        </div>
      </div>

    </Container>
<Container class1='home-wrapper-2 py-5'>
<div className="row productgappp">
    <div className="col-12">
      <div className="services d-flex align-items-center justify-content-between  gap-15">

      {
        services?.map((i,j) => {
          return(
            <div className='d-flex align-items-center gap-15  key={j}'>
        <img src={i.image} alt="services" />
        <div>
          <h6>{i.title}</h6>
          <p className='mb-0'>{i.tagline}</p>
        </div>
       </div>

          )
        })
        
      }
      

     

      

{/* 
       <div className='d-flex align-items-center gap-15'>
        <img src="images/service-05.png" alt="services" />
        <div>
          <h6> </h6>
          <p className='mb-0'> </p>
        </div>
       </div> */}

      </div>
    </div>
  </div>
</Container>
<Container class1='home-wrapper-2 py-5'>
<div className="row productgap">
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
</Container>
 <Container class1='featured-wrapper py-5 home-wrapper-2'>
 <div className="row">
      <div className="col-12">
        <div className="section-heading">Featured </div>
      </div>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
      </div>
 </Container>
  <Container class1='famous-wrapper py-5 home-wrapper-2'>
  <div className="row">
        <div className="col-3">
          <div className="famous-card sho position-relative">
          <img  className="img-fluid" src="https://cdn.dribbble.com/userupload/3915689/file/original-9cdee08263a8ed103cdbc339082cd608.jpg?crop=383x339-3200x2452&resize=320x240&vertical=center" alt="famous" />
           <div className="famous-content position-absolute">
           <h5>Smart Watch Series </h5>
            <h6></h6>
            <p className='text-dark'>From $399 or $16.62/mo. for 24 mo.</p>
           </div>
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card ship position-relative">
          <img className="img-fluid" src="https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=600" alt="famous" />
           <div className="famous-content position-absolute">
           <h5 >Studio Display</h5>
            <h6 className='text-dark'></h6>
            <p className='text-dark'>27-inch laptop display</p>
           </div>
          </div>
        </div>

        <div className="col-3">
          <div className="famous-card ship position-relative">
          <img className="img-fluid" src="https://images.pexels.com/photos/14438774/pexels-photo-14438774.jpeg?auto=compress&cs=tinysrgb&w=600" alt="famous" />
           <div className="famous-content position-absolute">
           <h5>Smart Phones 14 pro</h5>
            <h6 className='text-dark'></h6>
            <p className='text-dark'> From $1999.00 or $41.62/mo. for 24</p>
           </div>
          </div>
        </div>

        <div className="col-3">
          <div className="famous-card ship position-relative">
          <img className=" ship img-fluid" src="https://images.pexels.com/photos/12021852/pexels-photo-12021852.jpeg?auto=compress&cs=tinysrgb&w=600" alt="famous" />
           <div className="famous-content position-absolute">
           <h5 >Home Speakers</h5>
            <h6 className='text-dark'></h6>
            <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.</p>
           </div>
          </div>
        </div>
      </div>
  </Container>
 <Container class1= 'special-wrapper py-5 home-wrapper-2'>
 <div className="row">
       <div className="col-12">
        <h3 className="section-heading">Special Products</h3>
       </div> 
      </div>
      <div className="row ">
        <SpecialProduct/>
        <SpecialProduct/>
        <SpecialProduct/>
        <SpecialProduct/>
      </div>
 </Container> 
  <Container class1='"popular-wrapper py-5 home-wrapper-2"'>
  <div className="row">
      <div className="col-12">
        <h3 className="section-heading">Our Popular Products</h3>
      </div>
      </div>
      <div className="row">
      <ProductCard/>
       <ProductCard/>
       <ProductCard/>
       <ProductCard/>
      </div>
  </Container>
   <Container class1='marquee-wrapper py-5'>
   <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className='d-flex'>
             <div className='mx-4 w-25'>
              <img src="images/brand-01.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'>
              <img src="images/brand-03.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'>
              <img src="images/brand-04.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'>
              <img src="images/brand-02.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'>
              <img src="images/brand-05.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'>
              <img src="images/brand-06.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'>
              <img src="images/brand-08.png" alt="brand" />
             </div>

             <div className='mx-4 w-25'> 
              <img src="images/brand-07.png" alt="brand" />
             </div>


            </Marquee>
          </div>
        </div>
      </div>
   </Container>
<Container class1=' blog-wrapper py-5 home-wrapper-2'>
<div className="row productgap">
      <div className="col-12 ">
        <div className="productgap section-heading">Our Lastest Blogs</div>
      </div>
      <div className="row">
        <div className="col-3">
        <BlogCart/>
        </div>
        <div className="col-3">
        <BlogCart/>
        </div>
        <div className="col-3">
        <BlogCart/>
        </div>
        <div className="col-3">
        <BlogCart/>
        </div>
      </div>
      </div>
</Container>

  
 
 
  

    </>
 
  )
}

export default Home