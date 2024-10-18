import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Fetches the current year dynamically

  return (
    <div className="footer-container">
      <p>{currentYear} ElectroMart All rights reserved</p>
      <div className="icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Footer;