<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Sindhav%20Dinesh&fontSize=52&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Full%20Stack%20Developer%20Portfolio&descAlignY=55&descSize=18" width="100%" />

# ⚡ React Portfolio — Sindhav Dinesh

**`Full Stack Developer | UI/UX Enthusiast | Code. Create. Innovate.`**

<br/>

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

<br/>

### 🌐 [**View Live Portfolio**](https://void-by-sindhav.vercel.app/) &nbsp;•&nbsp; 📦 [**GitHub Repo**](https://github.com/sindhavdinesh/react-portfolio-)

<br/>

</div>

---

## 📸 Preview

<div align="center">

> **A premium, production-ready personal portfolio** with stunning animations, dark/light mode, and fully responsive design.

</div>

---

## 🎯 About This Project

This is my **personal developer portfolio** — built from scratch with modern web technologies to showcase my skills, projects, and certificates. Every pixel is crafted with attention to design, performance, and user experience.

> *"Turning ideas into reality, one component at a time."*

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🏠 Hero Section
- Animated typing effect with role titles
- Smooth entrance animations
- Download Resume & Contact CTA buttons
- Social links (GitHub, LinkedIn, Twitter, Instagram)

### 👤 About Page
- Personal bio & introduction
- Vertical timeline (education & experience)
- Creative companions section
- Framer Motion scroll animations

### 🖼️ Projects Showcase
- Filterable grid (All, Frontend, Full Stack, Featured)
- Cards with **GitHub** + **Live Demo** buttons — always visible
- Image zoom on hover + featured badge
- 6 real projects with actual GitHub links

</td>
<td width="50%">

### 🛠️ Skills Section
- **17 skills** in a 2-column side-by-side grid
- Animated progress bars with glowing tip dot
- Color-coded category badges (Frontend, Styling, Backend, Language, Tools, Creative)
- Rotating subtitle — 10 premium lines cycling every 2.5s
- Shimmer gradient text animation

### 🏆 Certificates Section
- 4 real certificates with actual images
- Lightbox viewer on click
- Competition, Professional, Cloud & Academic badges
- Framer Motion stagger animations

### 📬 Contact Page
- Fully functional contact form
- Email integration
- Social media links

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology | Version |
|---|---|---|
| ⚛️ **UI Library** | React | `19.2.6` |
| 🔷 **Language** | TypeScript | `6.0.2` |
| ⚡ **Build Tool** | Vite | `8.0.12` |
| 🎞️ **Animations** | Framer Motion | `12.40.0` |
| 🌿 **Scroll FX** | GSAP | `3.15.0` |
| 🔀 **Routing** | React Router DOM | `7.15.1` |
| 🎨 **Styling** | CSS Modules (Vanilla CSS) | — |
| 🖼️ **Icons** | React Icons | `5.6.0` |
| ✍️ **Typing FX** | React Type Animation | `3.2.0` |
| 🚀 **Deployment** | Vercel | — |

</div>

---

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── images/
│   │   ├── certificates/          # Certificate images
│   │   │   ├── cert-redwhite.jpeg
│   │   │   ├── cert-forage-jpmorgan.jpeg
│   │   │   ├── cert-aws-forage.jpeg
│   │   │   └── cert-hsc.jpeg
│   │   └── projects/              # Project screenshots
│   │       ├── flixvault.png
│   │       ├── ecommerce.png
│   │       ├── weather.png
│   │       ├── quiz.png
│   │       ├── dashboard.png
│   │       └── todo.png
│   └── Sindhav_Dinesh_Resume.pdf
│
├── src/
│   ├── components/
│   │   ├── about/                 # About page components
│   │   ├── certificates/          # 🏆 Certificates section
│   │   │   ├── Certificates.tsx
│   │   │   └── Certificates.module.css
│   │   ├── common/                # Reusable UI components
│   │   ├── home/                  # Hero & landing sections
│   │   │   └── Hero/
│   │   ├── layout/                # Header, Footer, Layout
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── projects/              # Project cards & filter
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectCard.module.css
│   │   │   └── ProjectFilter.tsx
│   │   └── skills/                # 🛠️ Skills section
│   │       ├── SkillsCloud.tsx
│   │       └── SkillsCloud.module.css
│   │
│   ├── data/                      # All data files
│   │   ├── projectsData.ts        # Projects with GitHub + Live Demo links
│   │   ├── personalInfo.ts        # Personal info & social links
│   │   └── mediaLibrary.ts
│   │
│   ├── pages/                     # Route-level pages
│   │   ├── HomePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── types/                     # TypeScript interfaces
│   │   └── index.ts
│   │
│   ├── App.tsx                    # Root app + routes
│   └── main.tsx                   # Entry point
│
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `≥ 18.0`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/sindhavdinesh/react-portfolio-.git

# 2. Navigate to project directory
cd react-portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# TypeScript check + Vite production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 My Certificates

| Certificate | Issuer | Year |
|---|---|---|
| 🏆 TECHWAR 2026 — C Tsunami | Red & White Skill Education | 2026 |
| 💼 Software Engineering Job Simulation | JPMorgan Chase & Co. via Forage | 2026 |
| ☁️ Solutions Architecture Job Simulation | Amazon Web Services via Forage | 2026 |
| 🎓 Vishisht Siddhi Sanmanpatra | B.N.B. High School, Vav | 2025 |

---

## 💼 Projects

| Project | Tech | GitHub | Live |
|---|---|---|---|
| 🎬 FlixVault — Netflix Clone | HTML, CSS, JS | [Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/FlixVault) | [Demo](https://sindhavdinesh.github.io/linkdin-project/FlixVault) |
| 🛒 E-Commerce Platform | HTML, CSS, JS | [Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/e-commerce%20product%20page) | [Demo](https://sindhavdinesh.github.io/linkdin-project/e-commerce%20product%20page) |
| 🌤️ Weather App | HTML, CSS, JS | [Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/Wheather%20App) | [Demo](https://sindhavdinesh.github.io/linkdin-project/Wheather%20App) |
| ❓ Quiz Application | HTML, CSS, JS | [Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/Quiz%20App) | [Demo](https://sindhavdinesh.github.io/linkdin-project/Quiz%20App) |
| 📊 Dashboard UI | HTML, CSS, JS | [Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/Dashboard%20UI) | [Demo](https://sindhavdinesh.github.io/linkdin-project/Dashboard%20UI) |
| ✅ To-Do Advanced App | HTML, CSS, JS | [Code](https://github.com/sindhavdinesh/linkdin-project/tree/main/To-do-advance%20App) | [Demo](https://sindhavdinesh.github.io/linkdin-project/To-do-advance%20App) |

---

## 🛠️ Skills Overview

```
Frontend   ████████████████████  HTML5 (95%) • CSS3 (90%) • JS (88%) • TS (75%) • React (85%)
Styling    ████████████████░░░░  Bootstrap (88%) • Media Query (85%)
Backend    ███████████████░░░░░  Node JS (78%)
Language   ██████████████░░░░░░  Python (80%) • C (72%) • C++ (70%)
Tools      ████████████████░░░░  Git (85%) • GitHub (88%) • VS Code (95%) • Sheets (80%)
Creative   █████████████░░░░░░░  Photoshop (70%) • Premiere Pro (65%)
```

---

## 🔗 Connect With Me

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-void--by--sindhav-FF4444?style=for-the-badge&logo=vercel&logoColor=white)](https://void-by-sindhav.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-sindhavdinesh-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sindhavdinesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dinesh_Sindhav-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dinesh-sindhav-41315a362/)
[![Twitter](https://img.shields.io/badge/Twitter-@Sind35407Dinesh-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Sind35407Dinesh)
[![Instagram](https://img.shields.io/badge/Instagram-mr__coder__dinesh-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/mr_coder_dinesh)
[![Email](https://img.shields.io/badge/Email-sindhavdinesh82@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sindhavdinesh82@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it as inspiration for your own portfolio!

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&animation=twinkling" width="100%" />

**Made with ❤️ by [Sindhav Dinesh](https://github.com/sindhavdinesh)**

*Code. Create. Innovate.*

⭐ **Star this repo if you found it helpful!** ⭐

</div>
