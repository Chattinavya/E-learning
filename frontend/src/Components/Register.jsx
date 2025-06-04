import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setErrorMsg('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const emailExists = users.some(
      (user) => user.email === email.trim().toLowerCase()
    );

    if (emailExists) {
      setErrorMsg('Email already registered.');
      return;
    }

    const newUser = {
      fullName,
      email: email.trim().toLowerCase(),
      password,
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setErrorMsg('');
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-left">
          <h1>Join SkillSync</h1>
          <p>Start your learning journey with top courses.</p>
          <img src="./Images/img.png" alt="SkillSync Logo" />
        </div>
        <div className="register-right">
          <h2>Create an Account</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
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
            <button type="submit">Register</button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
