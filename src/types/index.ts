// src/types/index.ts

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  /** About page portrait — e.g. /images/about/about-portrait.jpg */
  aboutImage?: string;
}

export interface AboutContent {
  heading: string;
  image: string;
  paragraphs: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
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
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft' | 'design';
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

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CreativeCompanion {
  id: number;
  name: string;
  role: string;
  bio: string;
  /** Photo path, e.g. /images/companions/friend-1.jpg */
  image: string;
  linkedin: string;
}

export interface MediaItem {
  id: string | number;
  type: 'photo' | 'video';
  title: string;
  description?: string;
  /** Path from public folder, e.g. /media/photos/my-photo.jpg */
  src: string;
  /** Optional poster image for videos */
  thumbnail?: string;
  category?: string;
  date?: string;
}
