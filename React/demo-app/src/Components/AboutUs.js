import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="card">
        <h4>About Us</h4>
        <h2>Your Trusted Financial Partner</h2>
        <p>
          We are dedicated to provide financial support to anyone who needed the
          most. Our simple and reliable platform helps people to achieve freedom
          from any crisis situation.
        </p>

        <button className="btn">Know More</button>
      </div>
      <div className="card">
        <h4>Work with Us</h4>
        <h2>Looking for a Career in Finance?</h2>
        <p>Get your finance career started with Paisaonclick.</p>

        <button className="btn">Join Now</button>
      </div>
    </div>
  );
};

export default AboutUs;
