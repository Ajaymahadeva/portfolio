import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import './Resume.css';
import resumePdf from '../assets/2300089014_resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="resume-section section-container">
      <div className="resume-content">
        <motion.div 
          className="resume-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Curriculum</span><br />
            <span className="text-outline">Vitae</span>
          </h2>
          <p className="resume-desc">
            Get a comprehensive overview of my technical skills, professional experience, and academic background. Download my resume to learn more about my journey as an AI and Software Developer.
          </p>
          <a href={resumePdf} download="Ajay_Mahadeva_Resume.pdf" className="download-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-icon">
              <Download size={20} />
            </span>
          </a>
        </motion.div>
        
        <motion.div 
          className="resume-right"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="resume-preview glass-panel">
            <div className="resume-preview-header">
              <FileText size={24} className="text-accent" />
              <span>resume_ajay_mahadeva.pdf</span>
            </div>
            <div className="resume-preview-body">
              <div className="skeleton-line title"></div>
              <div className="skeleton-line text"></div>
              <div className="skeleton-line text short"></div>
              <br />
              <div className="skeleton-line section"></div>
              <div className="skeleton-line text"></div>
              <div className="skeleton-line text"></div>
            </div>
            <div className="resume-glow"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
