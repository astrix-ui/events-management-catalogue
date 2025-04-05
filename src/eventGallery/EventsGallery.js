import React from "react";
import Gallery from "../Gallery/Gallery";

const eventImages = [
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  require("../assets/hero-image.jpg"),
  
  
];

function EventsGallery() {
  return (
    <div>
      
      <Gallery images={eventImages} />
    </div>
  );
}

export default EventsGallery;
