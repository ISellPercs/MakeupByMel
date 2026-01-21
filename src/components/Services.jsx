import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Bridal Makeup",
      price: "$XXX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your perfect bridal look for your special day, including trial session and touch-up kit.",
      features: ["Trial Session Included", "Touch-Up Kit", "Lashes", "Travel to Venue"],
      popular: true
    },
    {
      id: 2,
      title: "Bridal Party",
      price: "$XXX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beautiful looks for bridesmaids, mother of the bride, and all members of your bridal party.",
      features: ["Per Person Rate", "Group Discount Available", "Lashes Included", "On-Location Service"],
      popular: false
    },
    {
      id: 3,
      title: "Special Events",
      price: "$XXX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perfect for prom, quinceañera, graduations, galas, and any special occasion.",
      features: ["Prom & Quinceañera", "Graduations", "Galas & Parties", "Photo-Ready Finish"],
      popular: false
    },
    {
      id: 4,
      title: "Photoshoot & Editorial",
      price: "$XXX",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional makeup for photoshoots, content creation, and editorial work.",
      features: ["Hourly/Half-Day Rates", "Multiple Looks", "HD/Camera Ready", "Creative Collaboration"],
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-bg-accent"></div>
      
      <div className="container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">Services</h2>
          <div className="gold-line"></div>
          <p className="services-intro">
            Every face tells a story. Let me help you tell yours with customized 
            makeup artistry tailored to your unique features and personal style.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              variants={itemVariants}
            >
              {service.popular && <span className="popular-badge">Most Popular</span>}
              
              <h3 className="service-title">{service.title}</h3>
              <div className="service-price">
                <span className="price">{service.price}</span>
                <span className="price-note">Starting at</span>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="service-cta">
                Book This Service
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-note"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p>
            <strong>Travel Notice:</strong> I proudly serve the Phoenix metropolitan area. 
            Travel fees may apply for locations outside the city. 
            <a href="#contact"> Contact me</a> for a custom quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
