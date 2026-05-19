import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-container">
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-outline">Let's</span><br />
            <span className="text-gradient">Connect</span>
          </h2>
          <p className="contact-desc">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail className="text-accent" size={24} />
              <span>ajaymahadeva128@gmail.com</span>
            </div>
            <div className="contact-detail-item">
              <Phone className="text-accent" size={24} />
              <span>+91 9652441735</span>
            </div>
            <div className="contact-detail-item">
              <MapPin className="text-accent" size={24} />
              <span>India</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Name</label>
              <div className="input-line"></div>
            </div>

            <div className="input-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
              <div className="input-line"></div>
            </div>

            <div className="input-group">
              <textarea id="message" rows="4" required></textarea>
              <label htmlFor="message">Message</label>
              <div className="input-line"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
