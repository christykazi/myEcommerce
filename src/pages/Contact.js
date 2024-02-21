import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle} from "react-icons/bi";
import Container from '../components/Container';
import  { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const [message,setMessage] = useState(false)
  /* const handleSubmit = (e)=>{
    e.preventDefault()
    setMessage(true)
  } */

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y5lsfzb', 'template_xad8hgo', form.current, 'RIC4x65BxILJraNlf')

 /* for disappearing form */
    e.target.reset()


    /* .then((result) => {
      e.preventDefault()
      setMessage(true)
        console.log(result.text);
        console.log("message sent")
    }, (error) => {
        console.log(error.text);
    });
     */
  };



  return (
  <>
       <Meta  title={"Contact Us"}/>       
    <BreadCrumb title="Contact Us"/>
    <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.670369039155!2d3.4299384740628196!3d6.436366324171701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf527cae2dbd9%3A0x35d183ae36e2d0d9!2sTransit%20Village%201%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1698105636166!5m2!1sen!2sng" 
          width="600" height="450"
          className='border-0 w-100'
           allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
          </div>
          <div className="col-12 mt-5">
<div className="contact-inner-wrapper d-flex   justify-content-between">
<div>
  <h3 className="contact-title mb-4">Contact</h3>

  <form  ref={form} onSubmit={sendEmail} action="" className='d-flex flex-column gap-15'>
   <div>
   <input 
   type="text" 
   name='name'
    className='form-control' placeholder='Full Name' required/>
   </div>

   <div>
   <input 
   type="email" 
   name='email'
    className='form-control' placeholder='Email' required/>
   </div>

   <div>
   <input type="tel" 
   name='mobile'
    className='form-control' placeholder='Mobile Number' required/>
   </div>

   <div>
   <textarea
    name="message" id="" cols="30" 
   className='w-100 form-control'
   rows="4" placeholder='Comments'></textarea>
   </div>
   <div>
    <button type='submit' className='button border-0' >Submit</button>
   </div>
   {setMessage && <span>Thanks, I'll reply ASAP &#128512;&#128512; </span> }
  </form>
</div>
<div>
  <h3 className="contact-title mb-4">Get in touch with us</h3>
<div>
  <ul className="ps-0">
    <li className='mb-3 d-flex gap-15 align-items-center '>
      {<AiOutlineHome className='fs-5'/>}
      <address className='mb-0'>Hno:13 Adetokunbo,
Ademola VI Lagos.</address>
    </li>
    <li className='mb-3 d-flex gap-15 align-items-center '>
      {<BiPhoneCall className='fs-5'/>}
      <a href="tel:+234 9010917437">07010917437</a>
    </li>
    <li className='mb-3 d-flex gap-15 align-items-center '>
    <AiOutlineMail className='fs-5'/>
    <a href="mailto: agbaichristiana37@gmail.com">agbaichristiana37@gmail.com</a>
     </li>
    <li className='mb-3 d-flex gap-15 align-items-center '>
    
      <BiInfoCircle className='fs-5'/>
      <p className='mb-0'> Monday - Friday 10AM - 8PM</p>
    </li>
  </ul>
</div>
</div>
</div>
          </div>
        </div>
    </Container>
  </>
  )
}

export default Contact