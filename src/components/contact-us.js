import React, { useState } from 'react';
import './contactus.css';
import contactImage from '../images/contactus.jpg';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to your server or perform other actions.
    // For this example, we'll log the input values to the console.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('City:', city);
    console.log('Details:', details);
  };

  return (
    <div>
      <div className="contact-us-header">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <h1 className='head1'>Any Questions?</h1>
        <h2 className='head2'>We are happy to help</h2>
      </div>
      <h2 className='head'>We would like to <strong>hear from you</strong></h2>
      <div className="contact-us-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="contact-email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="details"
              placeholder="Write Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows="4"
              required
            />
          </div>
          <button type="submit" className="contactus-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
