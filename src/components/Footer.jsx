import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                <span className="footer-logo-text">Makeup</span>
                <span className="footer-logo-accent">by Mel</span>
              </a>
              <p className="footer-tagline">
                Enhancing your natural beauty for life's most memorable moments.
              </p>
              <div className="footer-social">
                <a 
                  href="https://instagram.com/mel.anie.ruvalcaba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Bridal Makeup</a></li>
                <li><a href="#services">Bridal Party</a></li>
                <li><a href="#services">Special Events</a></li>
                <li><a href="#services">Photoshoot</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <ul>
                <li>
                  <span className="contact-icon">✉</span>
                  <a href="mailto:mua.makeupbymel@gmail.com">
                    mua.makeupbymel@gmail.com
                  </a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Phoenix, Arizona</span>
                </li>
                <li>
                  <span className="contact-icon">📸</span>
                  <a 
                    href="https://instagram.com/mel.anie.ruvalcaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    @mel.anie.ruvalcaba
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Makeup by Mel. All rights reserved.</p>
            <p className="footer-credit">
              Crafted with <span className="heart">♥</span> in Phoenix, AZ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
