import React from 'react';
import './CreditScoreSection.css';

const CreditScoreSection = () => {
    return (
        <div className="credit-score-section">
            <div className="credit-score-header">
                <h2>Know your <br /> <span>Credit Score</span></h2>
                <p>Check if you are eligible for the best rates and wide range of offers.</p>
            </div>
            <hr />
            <div className="credit-score-stats">
                <div className="stat">
                    <strong>1000+</strong>
                    <p>Satisfied Customers</p>
                </div>
                <div className="stat">
                    <strong>100+</strong>
                    <p>Nationwide Partner</p>
                </div>
                <div className="stat">
                    <strong>4</strong>
                    <p>Years of Experience</p>
                </div>
            </div>
            <button className="check-now-btn">Check Now</button>
        </div>
    );
}

export default CreditScoreSection;
