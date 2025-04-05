import React, { useEffect } from "react";
import HeroSection from "../Herosection/Herosection";
import Certifications from "../certifications/Certifications";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    const homeImages = [
        require("../assets/hero-image.jpg"),
        require("../assets/hero-image.jpg"),
        require("../assets/hero-image.jpg"),
        require("../assets/hero-image.jpg"),
        require("../assets/hero-image.jpg"),
        require("../assets/hero-image.jpg"),
      ];
    
      useEffect(() => {
        document.title = "CompanyName"; // Set the tab title here
      }, []);

  return (
   <> 
   <HeroSection />
    <Certifications />
   <Features />
   <Gallery images={homeImages} />
   </>
  );
};

export default Home;
