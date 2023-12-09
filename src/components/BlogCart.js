import React from 'react'
import { Link }from 'react-router-dom'

const BlogCart = () => {
  return (
    
<div className="blog-card ">
    <div className="card-image ">
      <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
    </div>
    <div className="blog-content">
      <p className="date">17<small>th</small> Oct, 2022.</p>
      <h5 className="title">
          A beautiful Monday Morning renaissance
      </h5>
      <p className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nulla officia libero culpa, quo temporibus quidem praesentium asperiores, repudiandae iure nihil consectetur?
      </p> 
      <Link to="/blog/:id" className="button">
        Read More
      </Link>
    </div>

    </div> 
  )
}

export default BlogCart