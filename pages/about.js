// pages/about.js
import React from 'react';

const About = () => {
    return (
        <div className="about-us-container">
          <h1>About Us</h1>
          <p className="mission-statement">
            At ElectroMart, our mission is to provide customers with high-quality electronics at affordable prices while delivering exceptional customer service.
          </p>
          
          <section className="our-story">
            <h2>Our Story</h2>
            <p>
              Founded in 2023, ElectroMart began as a small startup with a vision to simplify the shopping experience for tech enthusiasts. Over the years, we've grown into a trusted name in the electronics industry, offering a wide range of products, from the latest gadgets to essential accessories.
            </p>
          </section>
    
          <section className="our-values">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Customer-Centric:</strong> We prioritize our customers and their needs, ensuring a seamless shopping experience.</li>
              <li><strong>Quality:</strong> We believe in offering only the best products that meet our high standards.</li>
              <li><strong>Innovation:</strong> We are committed to staying ahead of the curve by constantly updating our product offerings with the latest technology.</li>
              <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
            </ul>
          </section>
    
          <section className="get-in-touch">
            <h2>Get in Touch</h2>
            <p>If you have any questions, feedback, or inquiries, feel free to contact us at <a href="mailto:support@electromart.com">support@electromart.com</a>.</p>
          </section>
        </div>
      );
};

export default About;
