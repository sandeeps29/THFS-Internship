import React from 'react';
import './Footer.css';
import linkedinIcon from '../images/linkedin.png'; // Ensure the path is correct
import instagramIcon from '../images/instagram.jpeg'; // Ensure the path is correct
import facebookIcon from '../images/facebook.png'; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>POPULAR LOANS</h4>
          <ul>
            <li>Personal Loan</li>
            <li>Business Loan</li>
            <li>Home Loan</li>
            <li>Car Loan</li>
            <li>Gold Loan</li>
            <li>Education Loan</li>
            <li>Instant Loan</li>
            <li>Micro Loan</li>
            <li>2 Wheeler Loan</li>
            <li>3 Wheeler Loan</li>
            <li>Loan Against Car</li>
            <li>Loan Against Shares</li>
            <li>MSME Loan</li>
            <li>Rental Deposit Loan</li>
            <li>Pre-approved Loan</li>
            <li>Compare Loan Products</li>
            <li>Loan Against Property</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ's</li>
            <li>Article & Blogs</li>
            <li>About Paisaonclick Loan</li>
            <li>Partners & Lenders</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>POPULAR TOOLS</h4>
          <ul>
            <li>EMI Calculator</li>
            <li>Credit Score</li>
            <li>Bank Info</li>
            <li>IFSC Details</li>
            <li>Refer a Friend</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>REDUCE YOUR OBLIGATION</h4>
          <ul>
            <li>Loan Transfer</li>
            <li>Reduce your exiting loans</li>
            <li>Improve your financial situation</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>PARTNERSHIP & AFFILIATION</h4>
          <ul>
            <li>Become a partner / lead provider</li>
          </ul>
        </div>
      </div>
      <div className="footer-mail-section">
        <h4>MAIL APP LINK</h4>
        <form className="mail-form">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <span>Follow us on:</span>
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
        </div>
        <div className="footer-copyright">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Sitemap</span>
          <p> Copyright &copy; 2024 All rights reserved, Paisaonclick</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
