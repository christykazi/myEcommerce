import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodCompare from "../imagee/images/prodcompare.svg"
import wish from "../imagee/images/wish.svg"
import wishlist from "../imagee/images/wishlist.svg"
import watch from "../imagee/images/watch.jpg"
import speaker from "../imagee/images/speaker.jpg"
import addcart from "../imagee/images/add-cart.svg"
import view from "../imagee/images/view.svg"



const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
   <>
     <div 
    className={` ${ location.pathname == "/store" ?
     `gr-${grid}` : "col-3"} `}
     >
   {/*   <Link to={`/product/${product}`} className="product-card igm-fore position-relative"> */}

       <Link to=':id' className="product-card  igm-fore position-relative">
       <div className="wishList-icon position-absolute">
        <button className='border-0 bg-transparent'>
          <img src={wish} alt="wishlist" />
        </button>
       </div>
        <div className="product-image igm-fore">
            <img src={watch} className="img-fluid" alt="product image" />
            <img  src={speaker}
            className="img-fluid fluid-two"  alt="product image" />
        </div>
        <div className="product-details">
            <h6 className="brand">Harvel</h6>
            <h5 className="product-title">
                kids headphones bulk 10 pack multi coloured for student
            </h5>
            
  <ReactStars
    count={5}
    size={24}
    value='3'
    edit={false}
    activeColor="#ffd700"
  />
  <p  className={`description ${grid === 12 ? "d-block" : "d-none"}`}>sit amet consectetur adipisicing elit. Commodi illum assumenda tempora quos debitis! Ullam sed repellat fugiat, reprehenderit consequuntur architecto sunt explicabo, ad, ipsa facere aliquid quis ratione laudantium!</p>
            <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column'>
          <button className='border-0 bg-transparent'>
              <img src={view} alt="addcart" />
            </button>

            <button className='border-0 bg-transparent'>
              <img src={prodCompare}alt="addcart" />
            </button>

            <button className='border-0 bg-transparent'>
              <img src= {addcart}  alt="addcart" />
            </button>
          </div>
        </div>
       </Link> 
    </div>

    <div 
    className={` ${ location.pathname == "/store" ?
     `gr-${grid}` : "col-3"} `}
     >
       <Link to=':id' className="product-card  igm-fore position-relative">
       <div className="wishList-icon position-absolute">
        <Link>
          <img src={wish} alt="image" />
        </Link>
       </div>
        <div className="product-image igm-fore">
            <img src="images/watch.jpg" className="img-fluid" alt="product image" />
            <img  src={speaker}
            className="img-fluid fluid-two"  alt="product image" />
        </div>
        <div className="product-details">
            <h6 className="brand">Harvel</h6>
            <h5 className="product-title">
                kids headphones bulk 10 pack multi coloured for student
            </h5>
            
  <ReactStars
    count={5}
    size={24}
    value='3'
    edit={false}
    activeColor="#ffd700"
  />
            <p className="price">$100.00</p>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
             amet consectetur adipisicing elit. Commodi illum assumenda tempora quos debitis! Ullam sed repellat fugiat, reenderit consequuntur architecto sunt explicabo, ad, ipsa facere aliquid quis ratione laudantium!
            </p>
        </div>
        <div className="action-bar position-absolute">
          <div className='d-flex flex-column'>
          <Link>
              <img src={addcart} alt="addcart" />
            </Link>

            <Link>
              <img src={addcart} alt="addcart" />
            </Link>

            <Link>
              <img src={addcart} alt="addcart" />
            </Link>
          </div>
        </div>
       </Link> 
    </div>
   </>
  )
}

export default ProductCard