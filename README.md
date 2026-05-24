# 🚀 React Portfolio - Dinesh Sindhav

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify&logoColor=white)](https://netlify.com)

<div align="center">
  
## ✨ [Live Demo](https://your-portfolio-url.netlify.app) ✨ | 📦 [GitHub Repo](https://github.com/yourusername/react-portfolio) 📦

</div>

---

## 📸 Screenshots

<div align="center">
  
| Home Page | Projects Page | About Page |
|-----------|---------------|------------|
| ![Home](./public/portfolio.png) | ![Projects](./projects/dashboard.png) | ![About](./about-portrait.png) |

| Skills Cloud | Gallery | Contact |
|--------------|---------|---------|
| ![Skills](./public/media/coding-setup.jpg) | ![Gallery](./public/media/Event.jpeg) | ![Contact](./public/media/Team%20Event.jpeg) |

</div>

---

## 🎯 Overview

A **modern, production-ready personal portfolio website** built with cutting-edge web technologies. This portfolio showcases professional experience, projects, skills, and creative work with stunning animations and a fully responsive design.

### 🌟 Key Highlights

- ⚡ **Lightning Fast** - Built with Vite for instant hot reloading
- 🎨 **Beautiful Animations** - GSAP powered smooth transitions
- 🌓 **Dark/Light Mode** - Automatic theme switching with persistence
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessibility** - WCAG compliant components
- 🚀 **Production Ready** - Optimized build with code splitting

---

## 🔗 Quick Links

| Link | URL |
|------|-----|
| 🌐 **Live Demo** | [https://your-portfolio-url.netlify.app](https://your-portfolio-url.netlify.app) |
| 📦 **GitHub Repository** | [https://github.com/yourusername/react-portfolio](https://github.com/sindhavdinesh/react-portfolio-) |
| 📄 **Resume** | [Download Resume](./public/Sindhav_Dinesh_Resume.pdf) |
| 📧 **Contact** | [your.email@example.com](sindhavdinesh82@gmail.com) |

---

## ✨ Features Breakdown

### 🏠 Home Page
- Hero section with animated typing effect
- Interactive skill orbit (3D rotating skills)
- Statistics counter (projects, experience, clients)
- Call-to-action buttons

### 👤 About Page
- Personal bio and introduction
- Vertical timeline (education & work experience)
- Creative companions section
- Skills proficiency bars

### 🖼️ Projects Showcase
- Filterable project grid (All, React, FullStack, etc.)
- Project cards with images, tech stack, links
- Live demo and GitHub code buttons
- Responsive masonry layout

### 🛠️ Skills Section
- Interactive 3D skills cloud
- Skill cards with proficiency levels
- Technology icons with hover effects
- Category filtering (Frontend, Backend, Tools)

### 🎨 Media Gallery
- Photo gallery with lightbox
- Video gallery with playback
- Categorized media (Personal, Waterpark, Events)
- Lazy loading for performance

### 📬 Contact Form
- Form validation with error messages
- Email integration (Formspree/EmailJS)
- Social media links
- Map integration (optional)

---

## 🛠️ Tech Stack Details

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Frontend Framework** | React | 18.3.1 | UI Library |
| **Language** | TypeScript | 5.5.3 | Type Safety |
| **Build Tool** | Vite | 5.4.0 | Fast Development |
| **Animations** | GSAP | 3.12.5 | Scroll & Page Animations |
| **Routing** | React Router DOM | 6.26.0 | Navigation |
| **Styling** | CSS Modules | - | Scoped Styling |
| **Icons** | React Icons | 5.3.0 | Icon Library |
| **Form Handling** | React Hook Form | 7.53.0 | Form Management |
| **Email Service** | EmailJS | 3.11.0 | Contact Form |
| **Linting** | ESLint | 9.9.0 | Code Quality |
| **Formatting** | Prettier | 3.3.3 | Code Style |

---

## 📁 Complete Project Structure
react-portfolio/
├── public/
│ ├── media/
│ │ ├── photos/
│ │ │ ├── personal/
│ │ │ │ ├── personal-1.png
│ │ │ │ ├── personal-2.png
│ │ │ │ ├── personal-3.png
│ │ │ │ ├── personal-4.png
│ │ │ │ ├── personal-5.png
│ │ │ │ └── personal-7.png
│ │ │ ├── waterpark/
│ │ │ │ ├── waterpark-1.png
│ │ │ │ ├── waterpark-2.png
│ │ │ │ ├── waterpark-3.png
│ │ │ │ ├── waterpark-4.png
│ │ │ │ └── waterpark-5.png
│ │ │ ├── .gitkeep
│ │ │ ├── clg time.jpeg
│ │ │ ├── coding-setup.jpg
│ │ │ ├── Event.jpeg
│ │ │ ├── graduation.jpg
│ │ │ ├── img 1.jpeg
│ │ │ ├── img 2.jpeg
│ │ │ ├── img 3.jpeg
│ │ │ ├── img 4.jpeg
│ │ │ ├── img 5.jpeg
│ │ │ ├── img 6.jpeg
│ │ │ ├── profile.jpeg
│ │ │ └── project-demo-poster.png
│ │ ├── videos/
│ │ │ ├── .gitkeep
│ │ │ └── School achievement.mp4
│ │ ├── README.txt
│ │ ├── portfolio.png
│ │ ├── README-images.txt
│ │ └── Sindhav_Dinesh_Resume.pdf
│ │
├── src/
│ ├── animations/
│ │ ├── fade.ts
│ │ └── triggerfade.ts
│ │
│ ├── assets/
│ │ ├── images/
│ │ │ ├── background/
│ │ │ ├── profile/
│ │ │ ├── projects/
│ │ │ ├── skills/
│ │ │ └── videos/
│ │
│ ├── components/
│ │ ├── about/
│ │ │ ├── About.module.css
│ │ │ ├── About.tsx
│ │ │ ├── AboutHero.module.css
│ │ │ ├── AboutHeroText.tsx
│ │ │ ├── AboutLayout.module.css
│ │ │ ├── CreativeCompanions.module.css
│ │ │ ├── CreativeCompanion.tsx
│ │ │ ├── MyDescription.tsx
│ │ │ └── VerticalTimeline.tsx
│ │ │
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ ├── ButtonOutline.tsx
│ │ │ ├── Card/
│ │ │ ├── Heading/
│ │ │ ├── Heading.tsx
│ │ │ └── SubHeading.tsx
│ │ │
│ │ ├── contact/
│ │ │ └── Contact.tsx
│ │ │
│ │ ├── home/
│ │ │ ├── Hero/
│ │ │ ├── Hero.module.css
│ │ │ ├── Hero.tsx
│ │ │ ├── SkillOrbit.tsx
│ │ │ ├── Stats/
│ │ │ │ ├── StatCard.tsx
│ │ │ │ ├── Stats.module.css
│ │ │ │ └── Stats.tsx
│ │ │ └── assets.tsx
│ │ │
│ │ ├── input/
│ │ │ ├── Input.tsx
│ │ │ └── Textarea.tsx
│ │ │
│ │ ├── layout/
│ │ │ ├── Footer/
│ │ │ │ ├── Footer.module.css
│ │ │ │ └── Footer.tsx
│ │ │ ├── Header/
│ │ │ │ ├── Header.module.css
│ │ │ │ └── Header.tsx
│ │ │ ├── Layout.tsx
│ │ │ ├── MobileMenu.tsx
│ │ │ └── Navbar.tsx
│ │ │
│ │ ├── Loader/
│ │ │ ├── ButtonLoader.css
│ │ │ ├── ButtonLoader.tsx
│ │ │ ├── CSSLoader.css
│ │ │ ├── CSSLoader.tsx
│ │ │ ├── Loader.css
│ │ │ ├── Loader.tsx
│ │ │ ├── SkeletonLoader.css
│ │ │ └── SkeletonLoader.tsx
│ │ │
│ │ ├── media/
│ │ │ ├── MediaCard.tsx
│ │ │ ├── MediaLibrary.module.css
│ │ │ └── MediaLibrary.tsx
│ │ │
│ │ ├── projects/
│ │ │ ├── ProjectCard.module.css
│ │ │ ├── ProjectCard.tsx
│ │ │ ├── ProjectFilter.tsx
│ │ │ ├── Projects.module.css
│ │ │ └── Projects.tsx
│ │ │
│ │ ├── skills/
│ │ │ ├── SkillCard.tsx
│ │ │ ├── Skills.tsx
│ │ │ ├── SkillsCloud.module.css
│ │ │ └── SkillsCloud.tsx
│ │ │
│ │ ├── ThemeToggle/
│ │ │ ├── ThemeToggle.module.css
│ │ │ └── ThemeToggle.tsx
│ │ │
│ │ └── transitions/
│ │ ├── ChildTransition.tsx
│ │ └── SliderTransition.tsx
│ │
│ ├── context/
│ │ ├── slider.ts
│ │ ├── SliderContext.tsx
│ │ └── ThemeContext.tsx
│ │
│ ├── data/
│ │ ├── data.ts
│ │ ├── experienceData.ts
│ │ ├── mediaLibrary.ts
│ │ ├── personalInfo.ts
│ │ ├── projectsData.ts
│ │ ├── skillsCloudData.ts
│ │ └── skillsData.ts
│ │
│ ├── errors/
│ │ └── NotFound.tsx
│ │
│ ├── hooks/
│ │ ├── useGSAPHeading.ts
│ │ └── useScrollToTop.ts
│ │
│ ├── lib/
│ │ ├── gsap.ts
│ │ ├── pages/
│ │ │ ├── AboutMe.tsx
│ │ │ ├── AboutPage.tsx
│ │ │ ├── Contact.tsx
│ │ │ ├── ContactPage.tsx
│ │ │ ├── GalleryPage.tsx
│ │ │ ├── Home.tsx
│ │ │ ├── HomePage.module.css
│ │ │ ├── HomePage.tsx
│ │ │ ├── ProjectsPage.tsx
│ │ │ ├── Skills.tsx
│ │ │ └── SkillsPage.tsx
│ │ ├── routes/
│ │ │ └── Preview.tsx
│ │ ├── services/
│ │ └── types/
│ │ ├── content.ts
│ │ ├── index.ts
│ │ ├── personalInfo.ts
│ │ └── types.ts
│ │
│ ├── styles/
│ │ ├── global.css
│ │ └── themes.css
│ │
│ ├── utils/
│ │ ├── App.css
│ │ ├── App.tsx
│ │ ├── index.css
│ │ ├── main.tsx
│ │ └── vite-env.d.ts
│ │
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
│ ├── tsconfig.app.json
│ ├── tsconfig.json
│ ├── tsconfig.node.json
│ └── vite.config.ts
│
├── dist/
│ ├── assets/
│ │ ├── index-AtsWmaV.js
│ │ └── index-CNmfvA3u.css
│ ├── images/
│ │ ├── about/
│ │ │ ├── about-portrait.png
│ │ │ └── README.txt
│ │ ├── companions/
│ │ │ ├── friend-1.jpg
│ │ │ ├── friend-2.jpg
│ │ │ └── README.txt
│ │ └── projects/
│ │ ├── dashboard.png
│ │ ├── ecommerce.png
│ │ ├── fluxault.png
│ │ ├── quiz.png
│ │ ├── README.txt
│ │ ├── todo.png
│ │ └── weather.png
│ └── media/
│ ├── photos/
│ │ ├── personal/
│ │ │ ├── personal-1.png
│ │ │ ├── personal-2.png
│ │ │ ├── personal-3.png
│ │ │ ├── personal-4.png
│ │ │ ├── personal-5.png
│ │ │ └── personal-7.png
│ │ └── waterpark/
│ │ ├── waterpark-1.png
│ │ ├── waterpark-2.png
│ │ ├── waterpark-3.png
│ │ ├── waterpark-4.png
│ │ └── waterpark-5.png
│ ├── .gitkeep
│ ├── clg time.jpeg
│ ├── Event.jpeg
│ ├── img 1.jpeg
│ ├── img 2.jpeg
│ ├── img 3.jpeg
│ ├── img 4.jpeg
│ ├── img 5.jpeg
│ ├── img 6.jpeg
│ ├── profile.jpeg
│ ├── project-demo-poster.png
│ ├── School achievement.mp4
│ └── Team Event.jpeg
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
