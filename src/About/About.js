import React, { useEffect } from "react";
import "./About.css"; // Import the CSS file

function About() {
    const phoneNumber = "+919876543210";
    useEffect(() => {
      document.title = "About Us | CompanyName"; // Set the tab title here
    }, []);
  return (
    <div className="about-container">
      <h1>About CompanyName</h1>
      <p>
      Welcome to the official SRM Alumni network! Our platform connects past and present SRM students, providing opportunities for networking, mentorship, and career growth.Welcome to the official SRM Alumni network! Our platform connects past and present SRM students, providing opportunities for networking, mentorship, and career growth.Welcome to the official SRM Alumni network! Our platform connects past and present SRM students, providing opportunities for networking, mentorship, and career growth.
      </p>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
        To build a strong, supportive alumni community that fosters professional growth, collaboration, and lifelong connections.To build a strong, supportive alumni community that fosters professional growth, collaboration, and lifelong connections.To build a strong, supportive alumni community that fosters professional growth, collaboration, and lifelong connections.To build a strong, supportive alumni community that fosters professional growth, collaboration, and lifelong connections.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
        To create a global network where SRM graduates can share knowledge, support each other, and contribute to the university's success.To create a global network where SRM graduates can share knowledge, support each other, and contribute to the university's success.To create a global network where SRM graduates can share knowledge, support each other, and contribute to the university's success.To create a global network where SRM graduates can share knowledge, support each other, and contribute to the university's success.
        </p>
      </div>

      <div className="about-section">
        <h2>Join Our Community</h2>
        <p>
          Whether you're a recent graduate or an established professional, the SRM Alumni network welcomes you! Stay connected and make a difference.
        </p>
          {/* WhatsApp Contact Button */}
      <a href={`https://wa.me/${phoneNumber}`} target="_blank" id="wp-btn" rel="noopener noreferrer">
        <button className="whatsapp-button">Chat With Us on WhatsApp</button>
      </a>
      </div>
    </div>
  );
}

export default About;
