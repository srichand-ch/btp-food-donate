import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import the CSS for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <div>
      {showLoginForm && (
        <div className="auth-container">
          <Link to="/" className="close-button">X</Link>
          <h1>Login</h1>
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

          <p className='lef-al'>
            <Link to="/ForgotPassword">Forgot Password?</Link>
          </p>

          <button onClick={handleLogin} className='login-but'>Login</button>

          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
