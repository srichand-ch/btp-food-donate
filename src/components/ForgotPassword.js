import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS for styling

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showBlurBackground, setShowBlurBackground] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <div>
      {showBlurBackground && <div className="blur-background" />} 
      <div className="auth-container">
        <Link to="/Login" className="close-button">X</Link>
        <h1>Forgot Password</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleLogin} className='login-but'>Send Email</button>

        <p>
          Remember Password? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
