// src/types/type.ts
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
}

export interface Project {
  id: string | number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  tech: string[];
  github: string;
  liveDemo?: string;
  category: string;
  featured: boolean;
  date: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
  yearsOfExperience: number;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SliderContextType {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  direction: 'left' | 'right';
  setDirection: (dir: 'left' | 'right') => void;
}