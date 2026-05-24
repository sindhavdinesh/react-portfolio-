// src/lib/gsap.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type GSAPTarget = string | Element | Element[] | NodeListOf<Element>;

const resolveTarget = (target: GSAPTarget) => {
  if (typeof target === 'string') {
    return gsap.utils.toArray<HTMLElement>(target);
  }
  return target;
};

export const fadeInUp = (element: GSAPTarget, delay: number = 0) => {
  const target = resolveTarget(element);

  gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

export const scaleIn = (element: GSAPTarget, delay: number = 0) => {
  const target = resolveTarget(element);

  gsap.fromTo(target,
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, delay }
  );
};