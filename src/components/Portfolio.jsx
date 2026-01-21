import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Portfolio.css';
import Port1 from '../assets/Port1.jpg';
import Port2 from '../assets/Port2.png';
import Port3 from '../assets/Port3.jpg';
import Port4 from '../assets/Port4.png';
import Port5 from '../assets/Port5.jpg';
import Port6 from '../assets/Port6.jpg';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, title: 'Look 1', image: Port1 },
    { id: 2, title: 'Look 2', image: Port2 },
    { id: 3, title: 'Look 3', image: Port3 },
    { id: 4, title: 'Look 4', image: Port4 },
    { id: 5, title: 'Look 5', image: Port5 },
    { id: 6, title: 'Look 6', image: Port6 },
  ];

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Portfolio</h2>
          <div className="gold-line"></div>
        </motion.div>

        <motion.div 
          className="portfolio-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedImage(item)}
            >
              <img src={item.image} alt={item.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <span className="overlay-icon">+</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>See more of my work on Instagram</p>
          <a 
            href="https://instagram.com/mel.anie.ruvalcaba" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Follow @mel.anie.ruvalcaba
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
              <button 
                className="lightbox-close"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
