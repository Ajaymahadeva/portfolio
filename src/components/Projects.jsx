import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Invoice Fraud Detection System",
      description: "Engineered a full-stack fraud detection system analyzing invoice documents in real-time. Implemented advanced OpenCV preprocessing pipelines significantly improving Tesseract OCR extraction accuracy. Designed a multi-layered rule-based anomaly detection engine and an interactive Streamlit dashboard for real-time fraud analytics.",
      techStack: ["Python", "FastAPI", "Streamlit", "OpenCV", "Tesseract OCR"],
      github: "#",
      demo: "#",
      image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" // Placeholder for image
    },
    {
      title: "AI War Simulation",
      description: "Developed an intelligent turn-based war simulation implementing the Minimax algorithm. Optimized performance with Alpha-Beta pruning to create a robust AI strategic decision-making system.",
      techStack: ["Python", "AI Algorithms", "Game Theory"],
      github: "#",
      demo: "#",
      image: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)" // Placeholder for image
    }
  ];

  return (
    <section id="projects" className="projects-section section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-gradient">Featured</span><br />
        <span className="text-outline">Work</span>
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="project-image-container" style={{ background: project.image }}>
              {/* Replace background style with actual img tag when image is available */}
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} className="project-link-btn glass-panel">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.demo} className="project-link-btn glass-panel">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.techStack.map((tech, tIndex) => (
                  <span key={tIndex} className="tech-tag text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
