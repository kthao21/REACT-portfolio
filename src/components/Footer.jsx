import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import '../components/style.css';

const Footer = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };
   
    return (
      <footer>
        <div>
          <FaLinkedin onClick={() => handleIconClick('https://www.linkedin.com/in/kalia-thao-7325311b2/')} className='my-icon-class' />
          <FaGithub onClick={() => handleIconClick('https://github.com/kthao21')} className='my-icon-class'/>
          <FaStackOverflow onClick={() => handleIconClick('https://stackoverflow.com/users/22905353/kthao')} className='my-icon-class'/>
        </div>
      </footer>
    );
   };

export default Footer;