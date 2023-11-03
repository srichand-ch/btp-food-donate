// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import "./components/navbar.css"
import AboutUs from './components/AboutUs';
import ContactUs from './components/contact-us';
import Home from './components/Home';
import Donate from './components/Donate';
import Partnerwithus from './components/Partnerwithus';
import Login from './components/Login';
import Signup from './components/Signup';
import Signupdonor from "./components/Signupdonor";
import Signupuser from "./components/Signupuser";
import ForgotPassword from './components/ForgotPassword';
import Footer from './components/Footer';
import ImageSlider from "./components/ImageSlider";
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
// import {auth} from './components/firebase'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import { AuthProvider } from "./components/authcontext"

const IMAGES = [
  { url: img1, alt: "img One" },
  { url: img2, alt: "img Two" },
  { url: img3, alt: "img Three" },
]

function App() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className='container'>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/AboutUS" element={<AboutUs />}/>
          <Route path = "/ContactUs" element={<ContactUs />}/>
          <Route path = "/Partnerwithus" element={<Partnerwithus />}/>
          <Route path = "/Donate" element={<Donate />}/>
          <Route path="/Login" element={<div className='login-cont'><Login /></div>} />
          <Route path="/Signup" element={<div className='login-cont'><Signup /></div>} />
          <Route path="/Forgotpassword" element={<div className='login-cont'><ForgotPassword /></div>} />
          <Route path="/Signupdonor" element={<div className='login-cont'><Signupdonor /></div>} />
          <Route path="/Signupuser" element={<div className='login-cont'><Signupuser /></div>} />
        </Routes>
      </div>


      <div className='footer-container'>
        <Footer/>
      </div>
    </>
  )
};

export default App;






