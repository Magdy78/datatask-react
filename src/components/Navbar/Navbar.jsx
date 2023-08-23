import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; 


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" style={{ color: 'white' }} onClick={() => navigate('/')}>
        Shopify
      </div>
      <div className="navbar-links">
        <button
          className="navbar-button"
          onClick={() => navigate('/data')}
        >
          Shop Now
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate('/register')}
        >
          Register
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate('/ContactUs')}
        >
          Contact Us
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate('/About')}
        >
          About Me 
        </button>
        <button
          className="navbar-button"
          onClick={() => navigate('userSettings')}
        >
          UserSettings 
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
