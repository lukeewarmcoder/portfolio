⚡ Profitilo — Personal Portfolio
A premium, cinematic developer portfolio built with Next.js 14, Tailwind CSS & Framer Motion



Live Demo →
 · 

Report Bug
 · 

Request Feature

📸 Preview
<img width="1878" height="1038" alt="image" src="https://github.com/user-attachments/assets/eb295e9c-52cb-440b-8a8d-8aed0fe59c2c" />

![Portfolio Preview](https://via.placeholder.com/1200x630?text=Profitilo+Portfolio+Preview)
✨ Features
🎬 Cinematic Hero Section
Full-screen video background with lazy-load fallback gradient
Parallax scrolling — content fades and shifts as you scroll
Animated gradient text, staggered fade-up & blur-in transitions
Availability badge with live ping indicator
🌌 Interactive Backgrounds
Canvas particle system — interconnected nodes that react to viewport (dynamically loaded, SSR-safe)
Custom cursor with glow trail effect (disabled on touch devices)
Ambient neon orbs, scanline overlays & grid-line tech textures
🧊 Glassmorphism UI
Frosted-glass cards with gradient micro-borders
3D tilt cards — mouse-tracking perspective transforms with dynamic glow
Hover-glow effects across all interactive elements
📊 Live GitHub Stats
Real-time data fetched from the GitHub REST API (/users/lukeewarmcoder)
Animated counter components for repos, followers & following
Profile card with avatar, bio and direct link
Error state with retry button
🧭 Smart Navigation
Responsive glassmorphism navbar with mobile hamburger menu
Smooth-scroll anchor links with active-section highlighting
Section dividers with alternating flip-style wave transitions
🛠️ Skills & Tech Stack
Categorised skill cards — Languages, Frontend, Backend, Databases, Tools, Concepts
Interactive hover-scale badges with neon glow
Infinite marquee ticker showcasing all technologies
🚀 Projects Showcase
Tilt-card grid with per-project accent colours & glow
Detail modal with spring-animated entry, key features checklist, and tech tags
Direct links to GitHub repos and live demos
🔔 Currently Building
Highlighted "live" card with pulsing neon border animation
Shows current active project (Profitilo itself) with tech tags
📬 Contact Section
Dual-action form: saves to localStorage and opens a mailto: link
Contact info cards for Email, GitHub & LinkedIn with hover slide effect
Social icon buttons with micro-interactions
🔍 SEO & Performance
Open Graph & Twitter Card meta tags
JSON-LD structured data (Person schema)
Google Fonts via next/font (Inter + Outfit) with display: swap
Dynamic imports for heavy client components (ParticleBackground, CustomCursor)
Robots directive: index: true, follow: true
🏗️ Tech Stack
Layer	Technology
Framework	Next.js 14 (App Router)
Language	JavaScript (React 18)
Styling	Tailwind CSS 3.4 + custom neon theme
Animations	Framer Motion 11
Icons	Lucide React
Fonts	Inter & Outfit (via next/font/google)
Utilities	clsx, tailwind-merge
Deployment	Vercel / Netlify
📁 Project Structure
portfolio/
├── App/
│   ├── package.json              # Monorepo root (npm workspaces)
│   └── web/                      # Next.js application
│       ├── app/
│       │   ├── globals.css       # Global styles, animations & design tokens
│       │   ├── layout.jsx        # Root layout with SEO meta & fonts
│       │   └── page.jsx          # Home page — assembles all sections
│       ├── components/
│       │   ├── AnimatedCounter.jsx   # Smooth number counter animation
│       │   ├── CustomCursor.jsx      # Custom glow cursor (desktop only)
│       │   ├── MotionWrapper.jsx     # Reusable scroll-triggered animation wrapper
│       │   ├── Navbar.jsx            # Glassmorphism responsive nav
│       │   ├── ParticleBackground.jsx# Canvas particle network
│       │   ├── SectionDivider.jsx    # Wave-style section transitions
│       │   └── TiltCard.jsx          # 3D perspective-tilt card
│       ├── sections/
│       │   ├── Hero.jsx              # Cinematic hero with video bg
│       │   ├── About.jsx             # Bio, timeline & highlight cards
│       │   ├── Skills.jsx            # Categorised skill grid
│       │   ├── Projects.jsx          # Project cards + detail modal
│       │   ├── CurrentlyBuilding.jsx # Live "now building" highlight
│       │   ├── TechStack.jsx         # Tech badge grid + marquee
│       │   ├── GitHubStats.jsx       # Live GitHub API stats
│       │   ├── Contact.jsx           # Contact form + social links
│       │   └── Footer.jsx            # Site footer
│       ├── public/
│       │   └── video.mp4            # Hero background video
│       ├── tailwind.config.js       # Custom neon colour palette & animations
│       ├── postcss.config.mjs
│       └── next.config.js
├── vercel.json                   # Vercel deployment config
├── netlify.toml                  # Netlify deployment config
└── README.md
🚀 Getting Started
Prerequisites
Node.js ≥ 18
npm ≥ 9
Installation
bash
# 1. Clone the repository
git clone https://github.com/lukeewarmcoder/profitillo.git
cd profitillo
# 2. Install dependencies
cd App
npm install
# 3. Start the development server
npm run dev
The app will be running at http://localhost:3000.

Available Scripts
Script	Description
npm run dev	Start Next.js dev server on port 3000
npm run build	Create an optimised production build
npm run start	Serve the production build on port 3000
npm run lint	Run ESLint across the codebase
🌐 Deployment
Vercel (Recommended)
The repo includes a pre-configured vercel.json:

jsonc
{
  "installCommand": "cd App/web && npm install",
  "buildCommand": "cd App/web && npm run build",
  "outputDirectory": "App/web/.next",
  "framework": "nextjs"
}
Simply import the repo on vercel.com — zero extra config needed.

Netlify
A netlify.toml is also included for Netlify deployments:

toml
[build]
  base = "App/web"
  command = "npm run build"
  publish = "dist"
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
🎨 Customisation
Personal Info
Update your details in these files:

app/layout.jsx — Name, description, social links, SEO meta
sections/Hero.jsx — Headline, tagline, CTA links
sections/About.jsx — Bio paragraphs, timeline, highlights
sections/Contact.jsx — Email, GitHub, LinkedIn URLs
sections/Projects.jsx — Project titles, descriptions, tech stacks, links
Hero Video
Replace public/video.mp4 with your own. For best results:

Format: MP4 (H.264) — optionally add a WebM (VP9) <source> fallback
Resolution: 1920×1080 max
Bitrate: 2–4 Mbps
Duration: 10–30 seconds
Audio: Strip the audio track
bash
# Quick optimisation with FFmpeg
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow -an -vf scale=1920:-2 public/video.mp4
Theme (Tailwind)
The custom neon colour palette and animations are defined in tailwind.config.js. Key design tokens include:

neon-cyan, neon-blue, neon-purple, neon-pink — accent colours
Custom animations: glow-pulse, float, border-glow, marquee, shimmer
🧑‍💻 Author
Ayushman Dixit — Full-Stack Developer · BTech CS Student

GitHub: @lukeewarmcoder
LinkedIn: Ayushman Dixit
Email: 

ayushmandixit585@gmail.com
📄 License
This project is open source and available under the 

MIT License
.

Built with ❤️ and too much ☕ by Ayushman Dixit

If you liked this portfolio, consider giving it a ⭐!

