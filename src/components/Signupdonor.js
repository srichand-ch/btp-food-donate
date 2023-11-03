import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the same CSS for styling

function Signupdonor() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // To track password matching

  const handleSignup = () => {
    // Implement your signup logic here
    if (password === confirmPassword) {
      // Passwords match, you can proceed with signup
    } else {
      // Passwords don't match, handle the error
      setPasswordMatch(false);
    }
  };

  return (
    <div className="auth-container">
      <Link to="/Signup" className="close-button">X</Link>
      <h1>Sign Up as Donor</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          setPasswordMatch(true); // Reset password match state on input change
        }}
      />
      {passwordMatch ? null : (
        <p className="error">Passwords do not match.</p>
      )}
      <button onClick={handleSignup} className='login-but'>
        Sign Up as Donor
      </button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signupdonor;
