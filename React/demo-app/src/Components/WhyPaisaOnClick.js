import React from 'react';
import './WhyPaisaOnClick.css';
import choicesIcon1 from '../images/compare-offer.png';
import matchmakingIcon from '../images/check-eligibility.png'; 
import acceptanceRateIcon1 from '../images/approval-chance.png'; 
import choicesIcon2 from '../images/secure.png';
import acceptanceRateIcon2 from '../images/decision.png';
const WhyPaisaOnClick = () => {
  const features = [
    {
      title: 'Choices',
      description: 'At PaisaOnClick, we offer diverse financial products supported by 9000 lenders. From personal loans to mortgages, we\'ve got you covered.',
      icon: choicesIcon1
    },
    {
      title: 'Matchmaking And Smart Debt',
      description: 'Explore loan eligibility and discover the ideal lender through our SmartDebt system, we match users with suitable lenders across India.',
      icon: matchmakingIcon
    },
    {
      title: 'Acceptance Rate',
      description: 'PaisaOnClick boosts your approval chances with a streamlined process and advanced algorithms, enhancing your prospects for securing the assistance you need.',
      icon: acceptanceRateIcon1
    },
    {
      title: 'Choices',
      description: 'Our strong security measures and transparent policies ensure peace of mind, while our efficient process saves you time and hassle.',
      icon: choicesIcon2
    },
    {
      title: 'Acceptance Rate',
      description: 'With our comprehensive financial resources, from educational articles to personalised guidance, we assist you in making informed decisions that align with your goals.',
      icon: acceptanceRateIcon2
    }
  ];

  return (
    <div className="why-paisaonclick-section">
      <h2>Why <span>PaisaOnClick ?</span></h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={`${feature.title} Icon`} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyPaisaOnClick;
