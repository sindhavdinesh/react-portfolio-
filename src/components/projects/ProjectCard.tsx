// src/components/projects/ProjectCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const isValidLink = (url?: string) => Boolean(url && url !== '#');

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showDemo = isValidLink(project.liveDemo);
  const showGithub = isValidLink(project.github);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={styles.imageWrap}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            className={`${styles.image} ${isHovered ? styles.imageZoom : ''}`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.imageFallback} aria-hidden>
            <span>{project.title.charAt(0)}</span>
          </div>
        )}

        <div className={`${styles.overlay} ${isHovered ? styles.overlayVisible : ''}`}>
          {showGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <FaGithub /> Code
            </a>
          )}
          {showDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
