import React from "react";
import "./Footer.css";



const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
        <h4>Company Name</h4>
          <nav className="footer-links">
            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/contact">Contact Us</a>
            {/* <a href="#">Privacy Policy</a>
            <a href="#">Code Ethics</a> */}
          </nav>
         
        </div>
        <div className="footer-right">
        <a href="/">insta</a>
        <a href="/">insta</a>
        <a href="/">insta</a>
        <a href="/">insta</a>
        </div>
        
      </div>
      <div className="details">
      <p className="footer-text">© {currentYear} Company Name. All rights reserved.</p>
      <p className="powered">powered by astrixui</p>
      </div>
    </footer>
  );
};

export default Footer;
