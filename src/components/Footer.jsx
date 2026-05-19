import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-logo text-gradient">AJAY MAHADEVA</h2>
          <p className="footer-title">AI & Software Developer</p>
        </div>
        
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:ajay@example.com" className="footer-social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AJAY MAHADEVA. All rights reserved.</p>
        <p className="credit text-secondary">Designed & Developed by AJAY MAHADEVA</p>
      </div>
    </footer>
  );
};

export default Footer;
