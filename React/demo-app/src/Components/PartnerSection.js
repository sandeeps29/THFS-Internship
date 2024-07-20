import React, { useState } from "react";
import "./PartnerSection.css";

const partners = [
  { name: "HDFC Bank", img: "hdfc-loan.png", type: "all" },
  { name: "ICICI Bank", img: "icici-loan.png", type: "all" },
  { name: "AXIS Bank", img: "axis-loan.png", type: "all" },
  { name: "YES Bank", img: "yesbank-loan.png", type: "all" },
  { name: "IDFC Bank", img: "idfc-loan.png", type: "all" },
  { name: "AXIS Finance", img: "axis-finance-logo.png", type: "all" },
  { name: "Bajaj Finserv", img: "Bajaj_Finserv_Logo.png", type: "all" },
  { name: "Aditya Birla", img: "Aditya-Birla-Finance-Ltd.png", type: "all" },
  { name: "Fullerton India", img: "fullerton-india.png", type: "all" },
  { name: "Finnable", img: "finnable.png", type: "all" },
  { name: "Kotak Bank", img: "kotak.png", type: "all" },
  { name: "Muthoot Finance", img: "muthoot.png", type: "all" },
  { name: "Ujjivan", img: "ujjivan.png", type: "all" },
  { name: "SBI Bank", img: "sbi-loans.png", type: "all" },
  { name: "Punjab National Bank", img: "punjab-national-bank.png", type: "all" },
  { name: "Federal Bank", img: "federal-bank.jpeg", type: "all" },
];

const PartnerSection = () => {
  const [selectedType, setSelectedType] = useState("all");

  const filterPartners = (type) => {
    setSelectedType(type.toLowerCase());
  };

  return (
    <div className="partner-section">
      <h2>Our Partners Providing Loans</h2>
      <p>
        Providing Loans Access A Diverse Network Of Lenders Ready To Fulfilling
        Your Financial Needs
      </p>
      <div className="filter-buttons">
        {["All", "Unsecured", "Home loans", "Credit card", "Credit bureau"].map(
          (type) => (
            <button
              key={type}
              className={selectedType === type.toLowerCase() ? "active" : ""}
              onClick={() => filterPartners(type)}
            >
              {type}
            </button>
          )
        )}
      </div>
      <div className="partners">
        {partners
          .filter(
            (partner) => selectedType === "all" || partner.type === selectedType
          )
          .map((partner, index) => (
            <div key={index} className="partner-logo">
              <img
                src={require(`../images/${partner.img}`)}
                alt={partner.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PartnerSection;
