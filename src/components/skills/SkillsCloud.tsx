import React from 'react';
import { motion } from 'framer-motion';
import { skillBubbles, type SkillBubbleSize } from '../../data/skillsCloudData';
import styles from './SkillsCloud.module.css';

const sizeClass: Record<SkillBubbleSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

const SkillsCloud: React.FC = () => {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.title}>My Skills</h1>
          <p className={styles.subtitle}>
            Technologies and tools I work with
          </p>
        </motion.header>

        <div className={styles.arena} role="list" aria-label="Skills">
          {skillBubbles.map(({ id, label, Icon, color, top, left, size, delay }, index) => (
            <motion.div
              key={id}
              className={`${styles.bubble} ${sizeClass[size]}`}
              style={{ top, left }}
              role="listitem"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.08 + index * 0.04 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.2 + delay * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className={styles.ring}>
                  <Icon className={styles.icon} style={{ color }} aria-hidden />
                </div>
                <span className={styles.label}>{label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;
