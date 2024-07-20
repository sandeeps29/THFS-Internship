import React from "react";
import "./ToolsSection.css";
import emiImage from "../images/EMICalculator.png";
import creditScoreImage from "../images/CreditScore.png";
import bankInfoImage from "../images/BankInfo.png";
import ifscImage from "../images/IFSCDetails.png";
import referImage from "../images/Referafriend.png";

const tools = [
  { name: "EMI Calculator", buttonText: "Calculate Now", image: emiImage },
  { name: "Credit Score", buttonText: "Try Now", image: creditScoreImage },
  { name: "Bank Info", buttonText: "Try Now", image: bankInfoImage },
  { name: "IFSC Details", buttonText: "Learn More", image: ifscImage },
  { name: "Refer a Friend", buttonText: "Refer Now", image: referImage },
];

const ToolsSection = () => {
  return (
    <div className="tools-section">
      <h2>Tools</h2>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <img src={tool.image} alt={`${tool.name} Icon`} />
            <h3>{tool.name}</h3>
            <button className="tool-button">{tool.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
