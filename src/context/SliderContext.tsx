// src/context/SliderContext.tsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';
import type { SliderContextType, SliderProviderProps } from '../types/context';

export const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const SliderProvider: React.FC<SliderProviderProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <SliderContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        direction,
        setDirection,
        nextSlide,
        prevSlide
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('useSlider must be used within SliderProvider');
  }
  return context;
};
