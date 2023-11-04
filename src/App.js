import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store' element={<OurStore/>}/>
          </Route>
          <Route path='blogs' element={<Blog/>}/>
          <Route path='compare-product' element={<CompareProduct/>}/>
          <Route path='wishlist' element={<WishList/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='forgot-password' element={<Forgotpassword/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='reset-password' element={<Resetpassword/>}/>
          <Route path='blog/:id' element={<SingleBlog/>}/>
          <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='refund-policy' element={<RefundPolicy/>}/>
          <Route path='shipping-policy' element={<ShippingPolicy/>}/>
          <Route path='term-conditions' element={<TermsAndConditions/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// 