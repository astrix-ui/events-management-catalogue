import React from "react";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          We grow, <br /> process and <br /> pack Hero nuts.
        </h1>
        <p>
          In addition to processing nuts, we are dedicated to packing and
          selling <strong>almonds, organic mango, pistachio, cashews</strong>, among others.
        </p>
        <button className="hero-button">Get to know us</button>
      </div>
      <div className="hero-image">
        <img src={require("../assets/hero-image.jpg")} alt="Hero nuts" />
      </div>
    </div>
  );
};

export default HeroSection;
