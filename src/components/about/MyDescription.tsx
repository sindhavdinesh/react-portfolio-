// src/components/about/MyDescription.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import { FaAward, FaUsers, FaCode, FaRocket } from 'react-icons/fa';
import styles from './About.module.css';

const MyDescription: React.FC = () => {
  const features = [
    { icon: <FaCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
    { icon: <FaRocket />, title: 'Fast Performance', desc: 'Optimized for speed and efficiency' },
    { icon: <FaUsers />, title: 'Team Player', desc: 'Excellent collaboration skills' },
    { icon: <FaAward />, title: 'Quality Focus', desc: 'Attention to every detail' }
  ];

  return (
    <div className={styles.description}>
      <p className={styles.bio}>
        I'm <strong>{personalInfo.name}</strong>, a passionate Full Stack Developer with 1+ years of experience
        in building modern web applications. I love creating solutions that make a difference in people's lives.
      </p>
      
      <div className={styles.features}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyDescription;