import React from 'react';
import './ReferralSection.css';
import trophyImage from '../images/trophy.png'; 
const ReferralSection = () => {
  return (
    <div className="outer-section">
      <div className="referral-section">
        <div className="referral-content">
          <img src={trophyImage} alt="Trophy" className="referral-image" />
          <div className="referral-text">
            <h2>Earn Rewards for every person you refer to us</h2>
            <p>Start Referring & Earning Now</p>
          </div>
        </div>
        <div className="referral-buttons">
          <button className="btn dismiss-btn">Dismiss</button>
          <button className="btn refer-btn">Refer Now</button>
        </div>
      </div>
    </div>
  );
};

export default ReferralSection;
