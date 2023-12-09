import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import blog from "../imagee/images/blog-1.jpg"
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from "react-icons/hi";
import Container from '../components/Container'


const SingleBlog = () => {
  return (
   <>
     <Meta  title={"Dynamic Blog Name"}/>       
    <BreadCrumb title="Dynamic Blog Name"/>

    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className="row">
            
               <div className="col-12">
               <div className="single-blog-card">

               <Link to='/blogs' className='d-flex align-items-center gap-10'>
               <HiOutlineArrowLeft className='fs-4'/>Go back to Blogs</Link>
                <div className="title"><h3>A Beautiful Sunday Morning Renaissance</h3>
                <img src={blog}  className='img-fluid w-100 my-4'  alt="blog" />
                <p>You are only as good as your last collection, which is an enormous pressure. I think there is something about luxury
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius officia maxime ipsam. Atque, perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore hic tempora dolores perspiciatis eos adipisci vero optio laborum.</p>
                </div>
               </div>
               </div> 
            </div>
    </Container>
   </>
  )
}

export default SingleBlog