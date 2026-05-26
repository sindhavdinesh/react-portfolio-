// src/components/skills/SkillsCloud.tsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaGit, FaGithub,
  FaNodeJs, FaReact, FaBootstrap, FaPaintBrush, FaPhotoVideo,
} from 'react-icons/fa';
import {
  SiTypescript, SiCplusplus, SiGooglesheets,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbDeviceMobile, TbCircleLetterCFilled } from 'react-icons/tb';
import styles from './SkillsCloud.module.css';

interface Skill {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { id: 1,  label: 'HTML5',         icon: <FaHtml5 />,              color: '#e34f26', level: 95, category: 'Frontend'  },
  { id: 2,  label: 'CSS3',          icon: <FaCss3Alt />,            color: '#1572b6', level: 90, category: 'Frontend'  },
  { id: 3,  label: 'JavaScript',    icon: <FaJs />,                 color: '#f7df1e', level: 88, category: 'Frontend'  },
  { id: 4,  label: 'TypeScript',    icon: <SiTypescript />,         color: '#3178c6', level: 75, category: 'Frontend'  },
  { id: 5,  label: 'React JS',      icon: <FaReact />,              color: '#61dafb', level: 85, category: 'Frontend'  },
  // Styling
  { id: 6,  label: 'Bootstrap',     icon: <FaBootstrap />,          color: '#7952b3', level: 88, category: 'Styling'   },
  { id: 7,  label: 'Media Query',   icon: <TbDeviceMobile />,       color: '#06b6d4', level: 85, category: 'Styling'   },
  // Backend
  { id: 8,  label: 'Node JS',       icon: <FaNodeJs />,             color: '#3c873a', level: 78, category: 'Backend'   },
  // Languages
  { id: 9,  label: 'Python',        icon: <FaPython />,             color: '#3572a5', level: 80, category: 'Language'  },
  { id: 10, label: 'C',             icon: <TbCircleLetterCFilled />, color: '#a8b9cc', level: 72, category: 'Language'  },
  { id: 11, label: 'C++',           icon: <SiCplusplus />,          color: '#00599c', level: 70, category: 'Language'  },
  // Tools
  { id: 12, label: 'Git',           icon: <FaGit />,                color: '#f05032', level: 85, category: 'Tools'     },
  { id: 13, label: 'GitHub',        icon: <FaGithub />,             color: '#e2e8f0', level: 88, category: 'Tools'     },
  { id: 14, label: 'VS Code',       icon: <VscVscode />,            color: '#007acc', level: 95, category: 'Tools'     },
  { id: 15, label: 'Google Sheets', icon: <SiGooglesheets />,       color: '#34a853', level: 80, category: 'Tools'     },
  // Creative
  { id: 16, label: 'Photoshop',     icon: <FaPaintBrush />,         color: '#31a8ff', level: 70, category: 'Creative'  },
  { id: 17, label: 'Premiere Pro',  icon: <FaPhotoVideo />,         color: '#9999ff', level: 65, category: 'Creative'  },
];

const categoryColors: Record<string, string> = {
  Frontend:  '#61dafb',
  Styling:   '#c084fc',
  Backend:   '#4ade80',
  Language:  '#fb923c',
  Tools:     '#facc15',
  Creative:  '#f472b6',
};

const subtitleLines = [
  'Crafting Modern Web Experiences',
  'Technologies I Master',
  'Building Fast & Beautiful Apps',
  'Tools Behind My Creativity',
  'Turning Ideas Into Reality',
  'Code. Create. Innovate.',
  'Skills That Power My Work',
  'Technologies I Work With',
  'Frontend Excellence & Beyond',
  'Engineering Digital Experiences',
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowVariants = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillsCloud: React.FC = () => {
  const [hovered, setHovered]   = useState<number | null>(null);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLineIndex((prev) => (prev + 1) % subtitleLines.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>

        {/* ─── Heading ─── */}
        <motion.div
          className={styles.heading}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            My <span className={styles.grad}>Skills</span>
          </h2>
          {/* Rotating subtitle */}
          <div className={styles.subtitleWrap}>
            <AnimatePresence mode="wait">
              <motion.p
                key={lineIndex}
                className={styles.subtitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                {subtitleLines[lineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className={styles.divider} />
        </motion.div>

        {/* ─── Skill Rows ─── */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={styles.row}
              variants={rowVariants}
              onMouseEnter={() => setHovered(skill.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                '--skill-color': skill.color,
                '--cat-color': categoryColors[skill.category],
              } as React.CSSProperties}
            >
              {/* Left */}
              <div className={styles.left}>
                <div className={styles.iconBox} style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className={styles.nameWrap}>
                  <span className={styles.name}>{skill.label}</span>
                  <span
                    className={styles.catBadge}
                    style={{
                      background:  `${categoryColors[skill.category]}18`,
                      color:        categoryColors[skill.category],
                      borderColor: `${categoryColors[skill.category]}44`,
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className={styles.barWrap}>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                  />
                  <motion.div
                    className={styles.dot}
                    style={{ background: skill.color, boxShadow: `0 0 12px ${skill.color}, 0 0 4px ${skill.color}` }}
                    initial={{ left: 0 }}
                    whileInView={{ left: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                  />
                </div>
                <span
                  className={styles.percent}
                  style={{ color: hovered === skill.id ? skill.color : undefined }}
                >
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Category Legend ─── */}
        <motion.div
          className={styles.legend}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {Object.entries(categoryColors).map(([cat, col]) => (
            <div key={cat} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: col }} />
              <span className={styles.legendLabel}>{cat}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsCloud;
