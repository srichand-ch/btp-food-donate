import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the same CSS for styling

function Signupuser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [purpose, setPurpose] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // To track password matching

  const handleSignup = () => {
    // Implement your signup logic here
    if (password === confirmPassword) {
      // Passwords match, you can proceed with signup
      // Include the new fields (name, address, phoneNumber, aadhar, purpose) in your signup request
      const signupData = {
        email,
        password,
        name,
        address,
        phoneNumber,
        aadhar,
        purpose,
      };
      // Perform the signup with signupData
    } else {
      // Passwords don't match, handle the error
      setPasswordMatch(false);
    }
  };

  return (
    <div className="user-container">
      <Link to="/Signup" className="close-button">X</Link>
      <h1>Register as User</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='user-input'
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className='user-input'
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className='user-input'
      />
      <input
        type="text"
        placeholder="Aadhar No."
        value={aadhar}
        onChange={(e) => setAadhar(e.target.value)}
        className='user-input'
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='user-input'
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='user-input'
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setPasswordMatch(true); // Reset password match state on input change
        }}
        className='user-input'
      />
      {passwordMatch ? null : (
        <p className="error">Passwords do not match.</p>
      )}

      <textarea
        placeholder="Purpose for Requesting"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        style={{ height: "150px" }} 
        rows="6"
        required
      />
      
      <button onClick={handleSignup} className='login-but'>
        Register as User
      </button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signupuser;
