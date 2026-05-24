// src/components/layout/Header/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' }
];

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <motion.li
            key={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;