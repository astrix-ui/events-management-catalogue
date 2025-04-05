import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-card">
        <div className="icon">🌍</div>
        <h3>Impact</h3>
        <p>
          We're committed to the improvement in environmental management within
          the company and improving the well-being of the community where we
          operate.
        </p>
        {/* <button>Learn more</button> */}
      </div>

      <div className="feature-card">
        <div className="icon">🏆</div>
        <h3>Quality</h3>
        <p>
          Our products are carefully sourced from the best markets available,
          ranging from USA, Mexico, Vietnam, and Chile. Our top-quality
          selection ensures premium-grade products.
        </p>
        {/* <button>Learn more</button> */}
      </div>

      <div className="feature-card">
        <div className="icon">⚙️</div>
        <h3>Process</h3>
        <p>
          We have state-of-the-art technology and machinery to ensure the best
          processes in the market and exceed customer expectations.
        </p>
        {/* <button>Learn more</button> */}
      </div>
    </div>
  );
};

export default Features;
