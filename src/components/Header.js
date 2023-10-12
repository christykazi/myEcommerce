import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch, BsPersonCircle, BsArrowRepeat} from 'react-icons/bs'
import {BiSolidHeartCircle} from 'react-icons/bi'
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-5">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-5">
              <p className="text-end  text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+234 7010917437">
                  +234 7010917437
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white ">CriXanna.</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                 <BsSearch className="fs-6"/>
                </span>
              </div>
            </div>
            <div className="col-5">
                <div className="header-upper-links d-flex align-items-center justify-content-between">
                    <div><Link><BsArrowRepeat className="ico" />
                    <p className="mb-0">compare <br />Products</p></Link></div>

                    <div><Link> <BiSolidHeartCircle className="ico"/><p className="mb-0">
                    Favourite  <br />wishlist</p></Link></div>

                    <div><Link> <BsPersonCircle className="ico"/><p className="mb-0">
Login <br /> My Account
                    </p></Link></div>

                    <div>
                    <Link className="d-flex align-items-center gap-10 text-white"> 
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">$ 1500</p>
                    </div></Link></div>
                </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
          <div className="col-12">
           <div className="menu-buttom d-flex align-items-center gap-30">
          <div>
          <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="images/menu.svg" alt="" /><span className="me-5 d-inline-block">Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item text-white" href="#">Action</a></li>
    <li><a className="dropdown-item text-white" href="#">Another action</a></li>
    <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
  </ul>
</div>
          </div>
          <div className="menu-links">
          <div className="d-flex align-items-center gap-30">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Our Store</NavLink>
          <NavLink to="/">Blogs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          </div>
          </div>
           </div> 
          </div>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
