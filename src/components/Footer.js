import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin, BsYoutube,BsGithub,BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
<>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
        <div className="footer-top-data d-flex gap-30 align-items-center"><img src="images/newsletter.png" alt="newsletter" />
        <h2 className='mb-0 text-white'>Sign up for Newsletter</h2></div>  
        </div>
        <div className="col-7">
        <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
               Subscribe
                </span>
              </div>
        </div>
      </div>
    </div>
  </footer>
  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white mb-4'>Contact Us</h4>
          <hr className='lenn'/>
          <div className='footer-up text-white fs-6'>
           <address>Hno:13 Adetokunbo,
           <br />
           Ademola VI Lagos.

           </address>
        <a href="tel:+234 7010917437" className="mt-3 d-block mb-1 text-white">07010917437</a>
        <a href="mailto:agbaichristiana37@gmail.com" className="mt-2 d-block mb-0 text-white ">agbaichristiana37@gmail.com</a>
        <div className="social_icons d-flex align-items-center gap-30 mt-4">
          <a  className="text-white" href=""><BsLinkedin className="fs-8"/></a>
          <a  className="text-white" href=""><BsYoutube className="fs-8"/></a>
          <a  className="text-white" href=""><BsGithub className="fs-8"/></a>
          <a  className="text-white" href=""><BsInstagram className="fs-8" /></a>
        </div>
          </div>
        </div>
        <div className="col-3">
        <h4 className='text-white mb-4'>Information</h4>
        <hr className='lenn'/>
        <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1' >Tablets</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Mobile Phones</Link>
            <Link className='text-white py-2 mb-1'>Watches</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            
          </div>
        </div> 
        <div className="col-3">
        <h4 className='text-white mb-4'>Account</h4>
        <hr className='lenn'/>
        <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1' >Contact Us</Link>
             <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Faq</Link>
            <Link className='text-white py-2 mb-1'>About us</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link> 
            
          </div>
        </div>   
        <div className="col-2">
        <h4 className='text-white mb-4'>Quick Links</h4>
        <hr className='lenn'/>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1' >Tablets</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'> Phones</Link>
            <Link className='text-white py-2 mb-1'>Watches</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className='text-center mb-0 text-white'>
            &copy; {new Date().getFullYear()};         Powered by CriXianna Developer
          </p>
        </div>
      </div>
    </div>
  </footer>
</>
  )
}

export default Footer