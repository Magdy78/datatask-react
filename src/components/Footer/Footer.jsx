import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; This is my React Project</p>
        <div className="social-links">
          <a href="https://www.facebook.com/gunneruwk/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-magdy-3a2118211/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.behance.net/ahmedjunior" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-behance"></i>
          </a>
          <a href="https://github.com/Magdy78" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
