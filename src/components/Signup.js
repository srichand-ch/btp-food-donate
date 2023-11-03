import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the same CSS for styling

function Signup() {
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
      <Link to="/Login" className="close-button">X</Link>
      <h1>Sign Up</h1>

      <Link to="/Signupdonor">
        <button onClick={handleSignup} className='login-but'>
          Sign Up as Donor
        </button>
      </Link>

      <Link to="/Signupuser">
        <button onClick={handleSignup} className='login-but'>
          Register as User
        </button>
      </Link>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
