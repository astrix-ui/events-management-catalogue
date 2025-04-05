import React from "react";
import "./Gallery.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallerySection">
      <h2>Our Gallery</h2>
      <div className="gallery-container">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
