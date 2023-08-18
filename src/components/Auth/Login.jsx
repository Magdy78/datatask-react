import React, { useState } from 'react';
import './Auth.css';
import axiosInstance from '../services/axiosInstance.js';
//import { useHistory } from 'react-router-dom'; // Import useHistory
import { useNavigate } from 'react-router-dom'; 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const navigate = useNavigate(); 

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/login', { email, password });
      setIsLoggedIn(true);
      console.log('Login response:', response.data);
     navigate('/data');


    } catch (error) {
      console.error('Login error:', error);

    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
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
        <button type="submit" onClick={() => navigate('/data')}>Login</button>
      </form>
    </div>
  );
};

export default Login;
