import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
  <>
     <Meta  title={"Sign up"}/>       
    <BreadCrumb title="Sign up"/>
    <Container class1="login-wrapper py-5 home-wrapper-2">
<div className="row">
    <div className="col-12">
<div className="auth-card">
    <h3 className='text-center'>Sign up</h3>
    <form action="" className='d-flex flex-column gap-15'>
    <CustomInput  type="text"  name='name' placeholder='Name' />
    <CustomInput  type="email"  name='email' placeholder='email'  />
    <CustomInput type="tel"  name='mobile' placeholder='Mobile Number' />   
     
    <CustomInput 
   type="password"  name='password'   placeholder='password' />  
       
       {/* className='mt-1'  */}
        <div>
            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                <button className='button border-0'>Sign Up</button>
                
            </div>
        </div>
    </form>
</div>
    </div>
</div>
    </Container>
  </>
  )
}

export default Signup