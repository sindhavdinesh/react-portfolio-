// src/data/personalInfo.ts

import type { PersonalInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Sindhav Dinesh',

  title: 'Full Stack Developer & BCA Student',

  bio: 'Building exceptional digital experiences with modern web technologies. 3+ years of experience in creating scalable and performant applications.',

  email: 'sindhavdinesh82@gmail.com',

  phone: '+91 9510824860',

  location: 'Gujarat, India',

  resumeUrl: '/SINDHAV_DINESH.pdf',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/sindhavdinesh',
    icon: 'FaGithub',
  },

  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dinesh-sindhav-41315a362/?skipRedirect=true',
    icon: 'FaLinkedin',
  },

  {
    platform: 'Twitter',
    url: 'https://x.com/Sind35407Dinesh',
    icon: 'FaTwitter',
  },

  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/mr_coder_dinesh?igsh=MXFjc2R6MDd6NWxlNQ==',
    icon: 'FaInstagram',
  },
];

export const stats = [
  {
    label: 'Projects Completed',
    value: 70,
    suffix: '+',
  },

  {
    label: 'Years Experience',
    value: 1,
    suffix: '+',
  },

  {
    label: 'Happy Clients',
    value: 5,
    suffix: '+',
  },

  {
    label: 'GitHub Commits',
    value: 500,
    suffix: '+',
  },
];