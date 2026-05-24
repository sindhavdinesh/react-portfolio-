import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={`${styles.toggle} ${className}`}
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Light mode' : 'Dark mode'}
    >
      {isDarkMode ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
    </button>
  );
};

export default ThemeToggle;
