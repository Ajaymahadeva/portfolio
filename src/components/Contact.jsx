import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '41f641d6-8cfb-4d7a-9bf3-e5500225ea2a',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setStatusMsg('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Please try again later.');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="name">Name</label>
              <div className="input-line"></div>
            </div>

            <div className="input-group">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="email">Email</label>
              <div className="input-line"></div>
            </div>

            <div className="input-group">
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
              <label htmlFor="message">Message</label>
              <div className="input-line"></div>
            </div>

            <button type="submit" className="submit-btn" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <span>Sending...</span>
                  <div className="btn-spinner"></div>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} />
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {(status === 'success' || status === 'error') && (
              <motion.div
                className={`form-status ${status}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {status === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{statusMsg}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
