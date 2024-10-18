// components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p className='center'>If you have any questions, feel free to reach out to us.</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Office</h3>
        <p>123 ElectroMart Lane, Tech City, 54321</p>
        <p>Email: support@electromart.com</p>
        <p>Phone: +91-800-123-4567</p>
      </div>
    </div>
  );
};

export default ContactUs;
