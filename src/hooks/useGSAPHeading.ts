// src/hooks/useGSAPHeading.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGSAPHeading = (selector: string) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );
    }
  }, [selector]);

  return elementRef;
};