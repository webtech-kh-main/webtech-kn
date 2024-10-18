import React from 'react';
import './Footer.css'; // Add your custom CSS in this file

const Footer = () => {
  return (
    <footer>
      {/* Dark Blue Section */}
      <div className="footer-top">
        <div className="logo-section">
          <h2>WEB TECH</h2>
        </div>
        <div className="menu-links">
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>
        <div className="signup-button">
          <button>Sign up →</button>
        </div>
      </div>
      
      {/* White Section */}
      <div className="footer-bottom">
        <div className="signup-section">
          <span className='webtech-logo'>Web Tech</span>
          <p>Stay in the loop and sign up for the Wardiere newsletter:</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">→</button>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="company">
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="company">
            <h4>Documentation</h4>
            <ul>
              <li>Help Centre</li>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="company">
            <h4>Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
        <div className="footer-bottom-text">
          <p>© Wardiere Inc. All Rights Reserved 2023</p>
          <p>Terms & Conditions</p>
        </div>
    </footer>
  );
};

export default Footer;
