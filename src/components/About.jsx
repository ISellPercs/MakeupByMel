import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';
import AboutMe from '../assets/AboutMe.png';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-frame">
              <img src={AboutMe} alt="Melanie" className="about-image" />
            </div>
            <div className="about-image-accent"></div>
            <div className="about-experience-badge">
              <span className="experience-number">5+</span>
              <span className="experience-text">Years of<br/>Experience</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-subtitle">About Me</span>
            <h2 className="about-title">Meet Melanie</h2>
            <div className="gold-line" style={{ margin: '1.5rem 0 2rem' }}></div>
            
            <p className="about-intro">
              Welcome to Makeup by Mel! I'm a professional makeup artist based in Phoenix, Arizona, 
              dedicated to helping you look and feel your absolute best on your most special days.
            </p>
            
            <p className="about-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p className="about-body">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
              voluptatem accusantium doloremque laudantium.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✦</span>
                <span>Certified Makeup Artist</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✦</span>
                <span>Bridal Specialist</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✦</span>
                <span>Editorial & Events</span>
              </div>
            </div>

            <a href="#contact" className="btn-primary">Let's Work Together</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
