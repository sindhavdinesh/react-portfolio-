// src/data/data.ts
import type { PersonalInfo, Skill, Experience, SocialLink, CreativeCompanion, AboutContent } from '../types';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Sindhav Dinesh',
  title: 'Full Stack Developer & BCA Student',
  bio: 'Building exceptional digital experiences with modern web technologies. 1+ years of experience in creating scalable, performant applications.',
  email: 'Sindhavdinesh82@gmail.com',
  phone: '+91 9510824860',
  location: 'surat, India',
  resumeUrl: '/Sindhav_Dinesh_Resume.pdf',
  aboutImage: '/images/about/about-portrait.png',
};

export const aboutContent: AboutContent = {
  heading: 'Who am I?',
  image: personalInfo.aboutImage ?? '/portfolio.png',
  paragraphs: [
    `I'm ${personalInfo.name}, a tech-driven learner passionate about building real-world web solutions. I enjoy exploring modern frontend stacks, clean UI, and full-stack development — always eager to grow in a challenging professional environment.`,
    'Beyond code, I love blending creativity with technical precision — from design and editing to thoughtful user experiences. My goal is to build products that not only perform well, but also feel inspiring to use.',
    `${personalInfo.title}. Hands-on with React, JavaScript, Node.js, and creative tools. Based in ${personalInfo.location} — open to internships, collaborations, and meaningful projects.`,
  ],
};

// Social Links
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/sindhavdinesh', icon: 'FaGithub' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/sindhavdinesh', icon: 'FaLinkedin' },
  { platform: 'Twitter', url: 'https://twitter.com/sindhavdinesh', icon: 'FaTwitter' },
  { platform: 'Instagram', url: 'https://instagram.com/sindhavdinesh', icon: 'FaInstagram' }
];

// Stats
export const stats = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'GitHub Commits', value: 500, suffix: '+' }
];

export { projectsData, projectCategories } from './projectsData';

// Skills Data
export const skillsData: Skill[] = [
  { name: 'HTML', level: 95, category: 'frontend', yearsOfExperience: 2, icon: '🌐' },
  { name: 'CSS', level: 90, category: 'frontend', yearsOfExperience: 2, icon: '🎨' },
  { name: 'JavaScript', level: 88, category: 'frontend', yearsOfExperience: 2, icon: '⚡' },
  { name: 'React', level: 85, category: 'frontend', yearsOfExperience: 1, icon: '⚛️' },
  { name: 'TypeScript', level: 75, category: 'frontend', yearsOfExperience: 1, icon: '📘' },

  { name: 'Node.js', level: 78, category: 'backend', yearsOfExperience: 1, icon: '🟢' },
  { name: 'Python', level: 80, category: 'backend', yearsOfExperience: 1, icon: '🐍' },
  { name: 'C', level: 72, category: 'backend', yearsOfExperience: 1, icon: '💻' },
  { name: 'C++', level: 74, category: 'backend', yearsOfExperience: 1, icon: '🚀' },

  { name: 'Google Sheets', level: 82, category: 'tools', yearsOfExperience: 1, icon: '📊' },
  { name: 'Photoshop', level: 88, category: 'design', yearsOfExperience: 2, icon: '🖌️' },
  { name: 'Adobe Premiere Pro', level: 85, category: 'design', yearsOfExperience: 2, icon: '🎬' }
];

// Education Data
export const education = [
  {
    degree: 'BCA — Bachelor of Computer Applications',
    institution: 'Vidhyadeep University',
    period: '2025 - 2027',
    description: 'First year. CGPA: 8.12/10',
  },
  {
  degree: 'MCA / MSc — Study Abroad Goal',
  institution: 'Germany',
  period: 'Future Goal',
  description:
    'Aspiring to pursue an MCA or MSc in Germany while building strong skills in full stack development, cyber security, and modern technologies.'
},
];

// Experience Data
export const experienceData: Experience[] = [
  
  {
  id: 1,
  company: 'Tech Learning Journey',
  role: 'Creative & Technical Learner',
  period: '2025 - Present',
  description: 'Learning and building skills in Python, Google Sheets automation, Adobe Photoshop, and Premiere Pro while creating creative and technical projects and improving problem-solving, design, editing, and productivity workflows.',
  technologies: ['Python', 'Google Sheets', 'Photoshop', 'Premiere Pro']
},
  {
    id: 2,
    company: 'On going journey',
    role: 'Full Stack Developer',
    period: '2025 - 2026',
    description: 'Developed and maintained full-stack web applications, collaborated with design team, and optimized application performance.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'js', 'Tailwind']
  },
  {
    id: 3,
    company: 'Freelance',
    role: 'Web Developer',
    period: '2025 - 2026',
    description: 'Built responsive websites and web applications for various clients, focusing on user experience and performance.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress']
  }
];

// Creative Companions — update names, photos & LinkedIn URLs
export const creativeCompanions: CreativeCompanion[] = [
  {
    id: 1,
    name: 'Akshat Kumbhani',
    role: 'Full Stack Developer',
    bio: 'Coding buddy & project partner — Full Stack & Cyber Security Specialist.',
    image: '/images/companions/friend-1.jpg',
    linkedin: 'https://www.linkedin.com/in/akshat-kumbhani-198816281/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO9rz0kkFQoenbeKGF3DjJA%3D%3D',
  },
  {
    id: 2,
    name: 'Anugrah rakholiya',
    role: 'Full Stack Developer',
    bio: 'Passionate Full Stack Developer focused on building modern, responsive, and scalable web applications using frontend and backend technologies.',
    image: '/images/companions/friend-2.jpg',
    linkedin: 'https://www.linkedin.com/in/rakholiya-anugrah/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BClxptkPuSr6sK3joEZ3dhw%3D%3D',
  },
];

// Skill Categories
export const skillCategories = [
  { id: 'frontend', label: 'Frontend Development', color: '#00f3ff' },
  { id: 'backend', label: 'Backend Development', color: '#ff00e4' },
  { id: 'database', label: 'Database', color: '#7000ff' },
  { id: 'tools', label: 'Tools & Technologies', color: '#00ff88' }
];