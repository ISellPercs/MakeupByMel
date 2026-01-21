import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual form handling
    // You can integrate with Formspree, Netlify Forms, or your own backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        eventDate: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-bg-pattern"></div>
      
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Book Your Appointment</h2>
          <div className="gold-line"></div>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="form-title">Send a Message</h3>
            <p className="form-description">
              Fill out the form below and I'll get back to you within 24-48 hours 
              to discuss your beauty needs.
            </p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="eventDate">Event Date</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="bridal-party">Bridal Party</option>
                  <option value="special-events">Special Events</option>
                  <option value="photoshoot">Photoshoot / Editorial</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your event, vision, and any special requests..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.p 
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Thank you! Your message has been sent. I'll be in touch soon!
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Calendly & Contact Info */}
          <motion.div 
            className="contact-info-container"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Calendly Embed */}
            <div className="calendly-section">
              <h3 className="info-title">Schedule a Consultation</h3>
              <p className="info-description">
                Prefer to book directly? Use the calendar below to schedule 
                a free consultation call.
              </p>
              <div className="calendly-embed">
                {/* Replace YOUR_CALENDLY_USERNAME with actual Calendly link */}
                <div className="calendly-placeholder">
                  <span className="calendly-icon">📅</span>
                  <p>Calendly Booking Widget</p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Book on Calendly
                  </a>
                  <span className="calendly-note">
                    Replace this with your Calendly embed code
                  </span>
                </div>
                
                {/* Uncomment and add your Calendly link to enable the widget:
                <iframe
                  src="https://calendly.com/YOUR_CALENDLY_USERNAME?hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule Appointment"
                ></iframe>
                */}
              </div>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <h3 className="info-title">Contact Information</h3>
              
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:mua.makeupbymel@gmail.com">
                    mua.makeupbymel@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <span className="contact-label">Location</span>
                  <span>Phoenix, Arizona</span>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📸</span>
                <div>
                  <span className="contact-label">Instagram</span>
                  <a 
                    href="https://instagram.com/mel.anie.ruvalcaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    @mel.anie.ruvalcaba
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="response-note">
              <p>
                <strong>Response Time:</strong> I typically respond within 24-48 hours. 
                For urgent inquiries, please DM me on Instagram.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
