import { motion } from 'framer-motion';
import { Mail, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <motion.div 
          className="social-column"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={lineVariants} className="vertical-line top-line"></motion.div>
          <motion.a variants={itemVariants} href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">
             <FaGithub size={22} />
          </motion.a>
          <motion.a variants={itemVariants} href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
             <FaLinkedin size={22} />
          </motion.a>
          <motion.a variants={itemVariants} href="mailto:ajaymahadeva128@gmail.com" className="social-icon">
             <Mail size={22} />
          </motion.a>
          <motion.div variants={lineVariants} className="vertical-line bottom-line"></motion.div>
        </motion.div>
      </div>

      <div className="hero-center">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="hero-intro">
            <span className="intro-text">Hi, I am</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            <span className="text-gradient">AJAY</span><br />
            <span className="text-outline">MAHADEVA</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-subtitle">
            I'M A DEVELOPER
          </motion.h2>

          <motion.div variants={itemVariants} className="hero-description">
            <p className="primary-desc text-accent">Artificial Intelligence & Data Science Engineer</p>
            <p className="secondary-desc">AI Developer <span className="dot">•</span> ML Enthusiast <span className="dot">•</span> Problem Solver</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-right">
        <motion.div 
          className="hero-image-wrapper glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Placeholder for developer portrait, using an abstract futuristic gradient/pattern for now */}
          <div className="hero-image-placeholder">
            <div className="ambient-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="scroll-text">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
