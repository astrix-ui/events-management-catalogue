import React, { useState } from "react";
import "./navbar.css"; // Make sure to create and link the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <strong>

        CompanyName
        </strong>
      </div>

      {/* Desktop Nav Items */}
      <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <img
  src={menuOpen ? require("../assets/close.png") : require("../assets/hamburger.png")}
  alt="Menu Toggle"
  id="toggle-img"
  style={{ width: "24px", height: "auto" }} 
/>

      </div>
    </nav>
  );
};

export default Navbar;
