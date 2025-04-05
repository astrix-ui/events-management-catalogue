import React from "react";
import "./certifications.css";

const Certifications = () => {
  // Array of certification images
  const certImages = [
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    require("../assets/apple.png"),
    
  ];

  return (
    <div className="certifications-container">
      <h2>Certified by the world’s leading organizations</h2>
      <div className="certifications-logos">
        {certImages.map((image, index) => (
          <img key={index} src={image} alt={`Certification ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
