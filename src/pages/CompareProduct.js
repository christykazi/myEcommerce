import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'

const CompareProduct = () => {
  return (
 <>
     <Meta  title={"Compare Products"}/>       
    <BreadCrumb title="Compare Products"/>
    <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3 gir agy">
                    <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute  cross img-fluid" />
                      <img src="images/watch.jpg" alt="watch" />  
                    </div>
                    <div className="compare-product-details">
<h5 className="title">
    Honor Tl 7.0 1 GB ROM 7 Inch Wi-Fi+3g Tablet
</h5>
<h6 className="price mb-3 mt-3">$500</h6>
<div>
    <div className="product-detail">
        <h5>Brand</h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
        <h5>Type:</h5>
        <p>Watch</p>
    </div>
    <div className="product-detail">
        <h5>Color:</h5>
     <Color className="spac"/>
    </div>
    
    <div className="product-detail">
        <h5>Availability:</h5>
        <p>In Stock</p>
    </div>
    <div className="product-detail">
        <h5>Size:</h5>
       <div className="d-flex gap-10">
        <p>S</p>
        <p>M</p>
       </div>
    </div>
</div>
                    </div>
                </div>
                <div className="col-3 gap-15 gir agg">
                    <div className="compare-product-card position-relative">
                    <img src="images/cross.svg" alt="cross" className="position-absolute  cross img-fluid" />
                      <img src="images/watch.jpg" alt="watch" />  
                    </div>
                    <div className="compare-product-details">
<h5 className="title">
    Honor Tl 7.0 1 GB ROM 7 Inch Wi-Fi+3g Tablet
</h5>
<h6 className="price mb-3 mt-3">$500</h6>
<div>
    <div className="product-detail">
        <h5>Brand</h5>
        <p>Havels</p>
    </div>
    <div className="product-detail">
        <h5>Type:</h5>
        <p>Watch</p>
    </div>
    <div className="product-detail">
        <h5>Color:</h5>
     <Color className="spac"/>
    </div>
    
    <div className="product-detail">
        <h5>Availability:</h5>
        <p>In Stock</p>
    </div>
    <div className="product-detail">
        <h5>Size:</h5>
       <div className="d-flex gap-10">
        <p>S</p>
        <p>M</p>
       </div>
    </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </>
  )
}

export default CompareProduct