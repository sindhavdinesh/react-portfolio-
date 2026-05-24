// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ThemeContextType, ThemeProviderProps } from '../types/context';

const STORAGE_KEY = 'portfolio-theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialDarkMode = (): boolean => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light') return false;
    if (saved === 'dark') return true;
  } catch {
    /* ignore */
  }
  return true;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
