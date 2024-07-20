import React from "react";
import "./MobileAppDownload.css";
import mobileAppImage from "../images/download-app.png";

const MobileAppDownload = () => {
  return (
    <div className="mobile-app-download">
      <div className="image-container">
        <img
          src={mobileAppImage}
          alt="Mobile App"
          className="mobile-app-image"
        />
      </div>
      <div className="text-container">
        <h2>Download Our</h2>
        <h1>Paisaonclick Mobile app</h1>
        <p className="main-text">Get all loans & handle in one APP</p>
        <hr />
        <p className="sub-text">
          Use Our Tools For Free | Apply For Loan Easily | Get Exclusive Offers
          & Rates
        </p>
        <div className="download-buttons">
          <button className="google-play">GET IT ON Google play</button>
          <button className="app-store">GET IT ON App Store</button>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDownload;
