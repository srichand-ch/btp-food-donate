import React, { useState } from 'react';
import './contactus.css';
import contactImage from '../images/contactus.jpg';
import yourImage from '../images/img-partner.jpg';

function Partnerwithus() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., send the data to your server or perform other actions.
    // For this example, we'll log the input values to the console.
    console.log('Registered Entity Name:', name);
    console.log('Registered Address:', address);
    console.log('City:', city);
    console.log('Pincode:', pincode);
    console.log('Full Name:', contactName);
    console.log('Mobile Number:', contactPhone);
    console.log('Email:', contactEmail);
    console.log('Details:', details);
  };

  return (
    <div>
      <div className="contact-us-header">
        <img src={contactImage} alt="Contact Us" className="contact-image" />
        <h1 className='head1'>Become a</h1>
        <h2 className='head2'>Driver of Change</h2>
        <p className='p2'>Raise awareness about hunger and malnutrition within your organization</p>
      </div>

      <div className="partn">
          <div className="partn-content">
              <p>We are proud of organizations that work to ensure access to quality education, health care and skill based training for underserved communities in India. If our food support can help boost the impact of your work, we would love to partner with you.
              <p>We work together with our partners to collect regular feedbacks from the students as well as the teachers to provide the best nutritional support required to benefit each and every child.</p>
              </p>
              <img src={yourImage}/>
          </div>
      </div> 

      <div className="contact-us-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2 className='h2'>Organization Details</h2>
            <input
              type="text"
              id="registeredEntityName"
              placeholder="Registered Entity Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              id="registeredAddress"
              placeholder="Registered Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              id="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input
              type="text"
              id="pincode"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <h2 className='h2'>Primary Point of Contact</h2>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              required
            />
            <input
              type="tel"
              id="mobile"
              placeholder="Mobile Number"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
            />
            <input
              type="contact-email"
              id="email"
              placeholder="Email id"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <h2 className='h2'>Anything you would like for us to know?</h2>
            <textarea
              id="details"
              placeholder="Write details here"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              style={{ height: "150px" }} 
              rows="6"
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

export default Partnerwithus;
