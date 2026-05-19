import { motion } from 'framer-motion';
import { Code, Layout, Brain, Database, Wrench, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} />,
      skills: ["Python", "C", "JavaScript"]
    },
    {
      title: "Web",
      icon: <Layout size={24} />,
      skills: ["React.js", "HTML5", "CSS3"]
    },
    {
      title: "AI & ML",
      icon: <Brain size={24} />,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "LLMs"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: ["TensorFlow", "PyTorch", "Git", "GitHub", "VS Code", "Postman"]
    },
    {
      title: "Core",
      icon: <Layers size={24} />,
      skills: ["Data Structures & Algorithms", "Operating Systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="skills-section section-container">
      <motion.h2 
        className="section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-outline">Technical</span><br />
        <span className="text-gradient">Arsenal</span>
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={cardVariants} className="skill-card glass-panel">
            <div className="skill-icon-wrapper">
              {category.icon}
            </div>
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
