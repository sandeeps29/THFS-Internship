import React from 'react';
import './ProductsSection.css';
import personalLoanIcon from '../images/personal-loan.png';
import homeLoanIcon from '../images/home-loan.png';
import carLoanIcon from '../images/car-loan.png';
import educationLoanIcon from '../images/education-loan.png';
import moreLoansIcon from '../images/more-loans.png';

const ProductsSection = () => {
    const products = [
        { name: 'Personal Loan', rate: 'Starting at 10.3%', icon: personalLoanIcon },
        { name: 'Home Loan', rate: 'Starting at 6.7%', icon: homeLoanIcon },
        { name: 'Car Loan', rate: 'Starting at 7.65%', icon: carLoanIcon },
        { name: 'Education Loan', rate: 'Starting at 6.7%', icon: educationLoanIcon },
        { name: 'More', rate: '12+ Loans available', icon: moreLoansIcon },
    ];

    return (
        <div className="products-section">
            <h2>Products</h2>
            <div className="products-container">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.icon} alt={`${product.name} Icon`} />
                        <h3>{product.name}</h3>
                        <p>{product.rate}</p>
                        <button className="check-eligibility-btn">Check Eligibility</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsSection;
