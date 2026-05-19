import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      title: "Oracle Cloud Infrastructure 2025",
      subtitle: "Certified Architect Associate",
      issuer: "Oracle",
      link: "/certifications/oracle.pdf"
    },
    {
      title: "ServiceNow",
      subtitle: "Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      link: "/certifications/ServiceNow Certified System Administrator (CSA).pdf"
    }
  ];

  const handleViewClick = (link) => {
    if (link && link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="certifications" className="certs-section section-container">
      <motion.h2 
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-outline">Professional</span><br />
        <span className="text-gradient">Credentials</span>
      </motion.h2>

      <div className="certs-list">
        {certs.map((cert, index) => (
          <motion.div 
            key={index} 
            className="cert-card glass-panel"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="cert-icon">
              <Award size={32} />
            </div>
            <div className="cert-info">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.subtitle}</p>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-verified text-accent">
                  <CheckCircle size={14} className="verified-icon" /> Verified
                </span>
              </div>
            </div>
            <button 
              className="verify-btn glass-panel"
              onClick={() => handleViewClick(cert.link)}
            >
              View
            </button>
            <div className="cert-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
