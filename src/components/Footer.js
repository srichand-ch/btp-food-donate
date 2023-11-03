// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='column'>
          <h1 className='site-title-footer'>SHARE MEAL</h1>
          <p>The gift of food brings hope and nourishment to those who need it most.</p>
        </div>
        <div className="column">
          <h1 className="foo">Who we are</h1>
          <div>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
          <div>
            <Link to="/AboutUs">About Us</Link>
          </div>
        </div>
        <div className="column">
          <h1 className="foo">Get Involved</h1>
          <div>
            <Link to="/Donate">Donate</Link>
          </div>
          <div>
            <Link to="/partnerwithus">Patner with Us</Link>
          </div>
          <div>
            <Link to="/Signupuser">Request for food</Link>
          </div>
        </div>
        <div className="column">
          <h1 className="foo">Socials</h1>
          <div className='social-icons'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='icon-ld'/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className='icon-inst'/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className='icon-fb'/>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className='icon-twi'/>
            </a>
          </div>
        </div>
      </div>
      <p>&copy; 2023 Share Meal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
