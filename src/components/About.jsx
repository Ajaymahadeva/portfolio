import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-container">
      <div className="about-bg-text">
        <span>AJAY</span>
      </div>
      
      <div className="about-content">
        <motion.div 
          className="about-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">About</span><br />
            <span className="text-outline">Me</span>
          </h2>
          
          <div className="about-text glass-panel">
            <p>
              My name is <strong className="text-primary">AJAY MAHADEVA</strong>, and I am an Artificial Intelligence and Data Science undergraduate passionate about building intelligent systems and scalable software solutions.
            </p>
            <br />
            <p>
              I specialize in <span className="text-accent">AI-driven problem solving</span>, machine learning applications, and modern web technologies. My goal is to bridge the gap between complex algorithms and beautiful, user-centric interfaces.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="timeline-title text-gradient">Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <h4 className="text-primary">KL University</h4>
                <p className="timeline-degree">B.Tech in AI & Data Science</p>
                <span className="timeline-score text-accent">CGPA 9.5</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-panel">
                <h4 className="text-primary">Diploma</h4>
                <p className="timeline-degree">Electrical and Electronics Engineering</p>
                <span className="timeline-score text-accent">95%</span>
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
