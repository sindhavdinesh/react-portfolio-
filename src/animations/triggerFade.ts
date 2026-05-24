// src/animations/triggerFade.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const triggerFadeInUp = (element: string, delay: number = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

export const triggerScaleIn = (element: string, delay: number = 0) => {
  gsap.fromTo(
    element,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

export const triggerStaggerChildren = (parent: string, children: string, delay: number = 0.1) => {
  gsap.fromTo(
    children,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: delay,
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};