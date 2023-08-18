import React, { useState } from 'react';
import './Auth.css';
import axiosInstance from '../services/axiosInstance'; // Adjust the path

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/register', {
        email,
        password,
        confirmPassword,
      });
      console.log('Register response:', response.data);
      
    } catch (error) {
      console.error('Register error:', error);

    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
    <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
          <input
          type="password"
          placeholder="Confirm Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
