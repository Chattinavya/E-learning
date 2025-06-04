import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = storedUsers.find(
      (user) =>
        user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        user.password === password.trim()
    );

    if (matchedUser) {
      setErrorMsg('');
      navigate('/courses');
    } else {
      setErrorMsg('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1>Welcome Back!</h1>
          <p>Unlock your learning journey with <strong>SkillSync</strong>.</p>
          <img src="./Images/img.png" alt="E-learning" />
        </div>

        <div className="login-right">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errorMsg && <p className="error-text">{errorMsg}</p>}
            <button type="submit">Login</button>
          </form>

          <button className="google-btn" onClick={() => navigate('/courses')}>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Login with Google
          </button>

          <p className="register-text">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
