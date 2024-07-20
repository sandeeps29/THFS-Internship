import React from 'react';
import './LoanStatsSection.css';
import loanDisbursementIcon from '../images/cash-outline.png';
import loanProductsIcon from '../images/card-outline.png';
import satisfiedCustomerIcon from '../images/person-outline.png'; 
import nationwidePartnersIcon from '../images/partner-outline.png'; 

const LoanStatsSection = () => {
  const stats = [
    {
      amount: '100 Crore+',
      description: 'Loan Disbursement',
      icon: loanDisbursementIcon
    },
    {
      amount: '100+',
      description: 'Loan Products',
      icon: loanProductsIcon
    },
    {
      amount: '1000+',
      description: 'Satisfied Customer',
      icon: satisfiedCustomerIcon
    },
    {
      amount: '100+',
      description: 'Nationwide Partners',
      icon: nationwidePartnersIcon
    },
    {
      amount: '100+',
      description: 'Loan Products',
      icon: loanProductsIcon
    }
  ];

  return (
    <div className="loan-stats-section">
      <h2>An easy, hassle-free way to get a loan with our</h2>
      <p>Easy Application Process & Instant Approvals</p>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <img src={stat.icon} alt={`${stat.description} Icon`} />
            <h3>{stat.amount}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoanStatsSection;
