import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from "react-icons/bi"
import watch from "../imagee/images/watch.jpg"
import Container from '../components/Container'


const Checkout = () => {
  return (
   <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="ficolo col-7">
                    <div className="checkout-data">
                        <h3 className="website-name">
                        Digitic </h3>
                        <nav 
           style={{ "--bs-breadcrumb-divider": ">"}}
           aria-label="breadcrumb">
            <ol      className=" secbre d-flex">
                                <li className="breadcrumb-item">
                                    <Link className='text-dark total-price' to="/cart">Cart</Link>
                                </li>
                           &nbsp;  &nbsp;
                                <li className="breadcrumb-item active" aria-current="page">Information
                                </li>
&nbsp;
                                <li className="breadcrumb-item  total-price">
                                    Shipping
                                </li>
                           &nbsp;  
                                <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                            </ol>
                        </nav>
                   <p className="user-details total">
                    Richard Fedrick (jonaken123@gmail.com)
                   </p>
                   <h4 className='title total'>Customer Information</h4> 
                   <input type="checkbox" name="" id="" /> Email me with news and offers 
                   <p> Log Out</p>

                   <h4 className='mb-3'>Shipping Address</h4>
                   <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                    <div className='w-100'>
                        <select name="" className='form-control form-select' id=""
                        >
                            <option value="" selected disabled>Select Country</option>
                        </select>
                    </div>
                    <div className='w-100'>
                        <select name="" className='form-control form-select' id=""
                        >
                            <option value="" selected >Saved Address</option>
                        </select>
                    </div>
                    <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='First Name'
                        />           </div>
                    <div className='flex-grow-1'> 
                    <input type="text" className="form-control" placeholder='Last Name' />
                    </div>
                    <div className='w-100'> 
                    <input type="text" className="form-control" placeholder='Address' />
                    </div>

                    <div className='w-100'> 
                    <input type="text" className="form-control" placeholder='Apartment, Suite, etc.' />
                    </div>


                    <div className='flex-grow-1'> <input type="text" className="form-control" placeholder='City' />
                    </div>
                    <div className='flex-grow-1'> <select name="" className='form-control form-select' id=""
                        >
                            <option value="" selected disabled> Select State</option>
                        </select>
                        </div>
                    <div className='flex-grow-1'> <input type="text" className="form-control"  placeholder='Zip Code'/>
                </div>
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
         <Link  to="/cart" className='text-dark'>
         <BiArrowBack className='mwe'/>
         Return to Cart</Link>
         <Link  to="/product" className='button'>
         Continue to Shipping</Link>
                    </div>
                </div>
                   </form>
                    </div>
                </div>
                <div className=" secolo col-5">
                <div className="border-bottom py-4">           
<div className="d-flex  mb-2 gap-10 align-items-center">
    <div className='w-75 d-flex gap-10'>
    <div className='w-25 position-relative'> 
    <span style={{top: "-25px", right: "-1px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
1
    </span> 
    <img className='img-fluid' src={watch} alt="product" />
    </div>
    <div>
    <h5 className='total'>ggkjn</h5>   
    <p className='total-price'>s / #bjk</p> 
    </div>
</div>
    <div className='flex-grow-1'>
    <h5 className='total'>$ 100</h5>
    </div>
</div>
</div>
<div className='border-bottom py-4'>
<div className='d-flex  justify-content-between align-items-center'>
    <p className='total'>Subtotal</p>
    <p className='total-price'>$ 10000</p>
</div>
<div className='d-flex  justify-content-between align-items-center'>
    <p className='mb-0 total'>Shipping</p>
    <p className='mb-0 total-price '>$ 10000</p>
</div>
</div>
<div className='d-flex  justify-content-between align-items-center border-bottom py-4'>
    <h4 className='total'>Total</h4>
    <h5 className='total-price'>$ 10000</h5>
</div>
                </div>
            </div>
    </Container>   



   </>
  )
}

export default Checkout