// src/types/context.ts
import type { ReactNode } from 'react';

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface SliderContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  direction: 'left' | 'right';
  setDirection: (dir: 'left' | 'right') => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface SliderProviderProps {
  children: ReactNode;
}