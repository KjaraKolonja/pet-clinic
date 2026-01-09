import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/privacy-policy">Privacy Policy and Terms of Service</Link> 
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/SanFranciscoPetHospital/" target="_blank" className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/sfpethospital/" target="_blank" className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
