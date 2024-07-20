import React from "react";
import "./WhyChooseUs.css";
import zeroProcessing from "../images/zero-processing-img.png";
import contactlessKYC from "../images/contactlessKYC-img1.png";
import inviteEarnImage from "../images/InviteEarn-img1.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="section">
        <div className="text-container left">
          <h3>Zero Processing Fee & No Hidden Cost</h3>
          <p>
            “We do not charge any commission for our services, neither there is
            any markup or commission involved for our services. We have
            partnerships with the banks, we work with and are driven by the
            benefits banks provide to us, for servicing their future consumers.”
          </p>
        </div>
        <img
          src={zeroProcessing}
          alt="Zero Processing Fee & No Hidden Cost"
          className="section-image right"
        />
      </div>
      <div className="section">
        <img
          src={contactlessKYC}
          alt="Verify Your Account"
          className="section-image left"
        />
        <div className="text-container right">
          <h3>Verify Your Account</h3>
          <p>
            “We do not charge any commission for our services, neither there is
            any markup or commission involved for our services. We have
            partnerships with the banks, we work with and are driven by the
            benefits banks provide to us, for servicing their future consumers.”
          </p>
        </div>
      </div>
      <div className="section">
        <div className="text-container left">
          <h3>Invite & Earn</h3>
          <p>
            Invite your friends to join Paisaonclick mobile app, and you both
            can earn exciting offers and rewards. The rewards include lower
            interest rates, and special offers on items to purchase from our
            partners.
          </p>
        </div>
        <img
          src={inviteEarnImage}
          alt="Invite & Earn"
          className="section-image right"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
