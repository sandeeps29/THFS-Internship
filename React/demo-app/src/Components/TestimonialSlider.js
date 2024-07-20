
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css"; 

const testimonials = [
  {
    stars: 5,
    text: "I loved the customer service you guys provided me. That was very nice and patient with the questions I had. I would really like definitely come back here.",
    name: "Divya S Viswan",
    position: "HR Generalist",
  },
  
];

const TestimonialSlider = () => {

  return (
    <div className="testimonial-slider">
      <h2>Client Testimonials</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-content">
              <div className="stars">{"★".repeat(testimonial.stars)}</div>
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TestimonialSlider;
