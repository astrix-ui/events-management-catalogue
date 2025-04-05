import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const phoneNumber = "+919876543210"; // Replace with your actual WhatsApp number
  const email = "alumni@srm.edu"; // Replace with your actual email

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    // You can add logic to send form data via email or API here.
  };

  useEffect(() => {
    document.title = "Contact Us | CompanyName"; // Set the tab title here
  }, []);

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Feel free to reach out through any of the following ways.</p>

    

      <div className="contact-section">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Reach out today</h2>
        <a href={`https://wa.me/${phoneNumber}`} target="_blank"  rel="noopener noreferrer">
          <button className="contact-button whatsapp" class="contact-btn">Chat on WhatsApp</button>
        </a>
        <a href={`mailto:${email}`} className="email-button">
          <button className="contact-btn">Email Us</button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
