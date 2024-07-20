import React from 'react';
import './InvestorsSection.css';
import trustedHandsLogo from '../images/thfs_logo.png'; 
import hubtreeVenturesLogo from '../images/hubtree.png'; 

const InvestorsSection = () => {
  return (
    <div className="investors-section">
      <h2>Our Investors</h2>
      <div className="investor-logos">
        <div className="investor-logo1">
          <img src={trustedHandsLogo} alt="Trusted Hands Financial Services" />
        </div>
        <div className="investor-logo2">
          <img src={hubtreeVenturesLogo} alt="Hubtree Ventures" />
        </div>
      </div>
    </div>
  );
};

export default InvestorsSection;
