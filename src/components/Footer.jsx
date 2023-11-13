import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    const handleIconClick = (icon) => {
      alert(`${icon} icon clicked!`);
    };
   
    return (
      <footer>
        <div>
          <FaLinkedin onClick={() => handleIconClick('Linkedin')} />
          <FaGithub onClick={() => handleIconClick('Github')} />
          <FaStackOverflow onClick={() => handleIconClick('Stackoverflow')} />
        </div>
      </footer>
    );
   };

export default Footer;