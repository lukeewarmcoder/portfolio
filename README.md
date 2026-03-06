<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0f0f,100:6E40C9&height=200&section=header&text=Profitlio&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=Personal%20Portfolio%20%E2%80%94%20Ayushman%20Dixit&descAlignY=58&descSize=18" />

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1000&color=6E40C9&center=true&vCenter=true&width=600&lines=Full-Stack+Developer+%F0%9F%9A%80;BTech+CS+Student+%F0%9F%8E%93;Building+Clean+Code+%26+Smart+Solutions+%E2%9C%A8;Next.js+14+%7C+Tailwind+%7C+Framer+Motion)](https://git.io/typing-svg)

<br/>

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Demo-Visit%20Portfolio-6E40C9?style=for-the-badge)](https://lukeewarmcoder.vercel.app)
[![Report Bug](https://img.shields.io/badge/%F0%9F%90%9B%20Report-Bug-ff4757?style=for-the-badge)](https://github.com/lukeewarmcoder/profitlio/issues)
[![Request Feature](https://img.shields.io/badge/%E2%9C%A8%20Request-Feature-2ed573?style=for-the-badge)](https://github.com/lukeewarmcoder/profitlio/issues)

<br/>

![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📸 Preview

![Portfolio Preview](./public/preview.png)

> 💡 Run `npm run dev`, take a screenshot, save it as `public/preview.png` and it will appear here.

---

## ✨ Features

### 🎬 Visual & UX
- **Cinematic Hero Section** — full-screen video background with lazy-load fallback & gradient parallax scrolling
- **Availability Badge** — live ping indicator 🟢 with animated pulse
- **Custom Cursor** — glow trail effect (desktop only, disabled on touch devices)
- **Glassmorphism UI** — frosted-glass cards with gradient micro-borders and dynamic glow
- **Ambient neon orbs**, scanline overlay & grid-line tech textures

### ⚙️ Interactive Components
- **Interactive Backgrounds** — Canvas particle system interconnected with mouse & touch events
- **Animated Counter Components** — 3D tilt cards for stats
- **Smart Navigation** — glassmorphism navbar with avatar, bio, and direct link & error retry button
- **Infinite Marquee Ticker** — scrolling tech showcase across all interactive elements

### 📊 Data & Stats
- **Live GitHub Stats** — real-time data fetched from the GitHub REST API
- **GitHub Heatmap** — contribution calendar with neon-glow styling
- **SEO & Performance** — Open Graph & Twitter Card meta tags, JSON-LD structured data (Person schema)

### 🌐 Pages & Sections

| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Cinematic full-screen video intro with CTA |
| 👤 **About** | Bio, paragraph, timeline & highlights |
| 🛠 **Skills** | Categorised skill grid with hover-scale badges |
| 🚀 **Projects** | Tilt-card grid with per-project accent colours & glow |
| 📬 **Contact** | Email, GitHub & LinkedIn with mailto links + social icon buttons |
| 📈 **GitHub Stats** | Live contribution graphs, streak & language stats |

### 🏗 Technical Highlights
- Smooth anchor scroll links with active-section highlighting
- Section dividers with alternating flip-style wave transitions
- Responsive glassmorphism navbar with mobile hamburger menu
- Detail modal with spring-animated entry, key features checklist & tech tags
- Direct links to GitHub repos and live demos
- `Currently Building` live badge 🔥
- Google Fonts via `next/font` (Inter + Outfit) with `display: swap`
- Dynamic imports for heavy client components (`ParticleBackground`, `CustomCursor`)
- `robots: true, follow: true` meta directives

---

## 🗂 Project Structure

```
profitlio/
├── App/                       # Next.js 14 App Router root
│   ├── layout.js              # Root layout with SEO meta & fonts
│   ├── page.js                # Home page — assembles all sections
│   └── globals.css            # Global styles, animations & design tokens
│
├── components/
│   ├── AnimatedCounter.jsx    # Number counter animation
│   ├── CustomCursor.jsx       # Custom glow cursor (desktop only)
│   ├── MotionWrapper.jsx      # Reusable scroll-triggered animation wrapper
│   ├── Navbar.jsx             # Glassmorphism responsive nav
│   ├── ParticleBackground.jsx # Canvas particle network
│   ├── SectionDivider.jsx     # Wave-style section transitions
│   ├── TiltCard.jsx           # 3D perspective tilt card
│   ├── Hero.jsx               # Cinematic hero with video bg
│   ├── About.jsx              # Bio, timeline & highlights
│   ├── Skills.jsx             # Categorised skill grid
│   ├── Projects.jsx           # Project cards + detail modal
│   ├── CurrentlyBuilding.jsx  # Live "now building" highlight
│   ├── GitHubStats.jsx        # Live GitHub API stats
│   ├── TechStack.jsx          # Tech badge grid + marquee
│   ├── Footer.jsx             # Site footer
│   └── Contact.jsx            # Contact form + social links
│
├── public/
│   └── video.mp4              # Hero background video
│
├── tailwind.config.js         # Custom neon colour palette & animations
├── next.config.js             # Next.js config
├── postcss.config.mjs         # PostCSS config
├── netlify.toml               # Netlify deployment config
└── vercel.json                # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** `>= 9`

### Installation

```bash
# Clone the repository
git clone https://github.com/lukeewarmcoder/profitlio.git

# Navigate into the app
cd App

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js dev server on port 3000 |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build on port 3000 |
| `npm run lint` | Run ESLint across the codebase |

---

## ⚙️ Customisation

Update your personal info in these files:

| File | What to change |
|------|----------------|
| `app/layout.js` | Name, description, social links, SEO |
| `sections/Hero.jsx` | Headline, tagline, CTA links |
| `sections/About.jsx` | Bio paragraph, timeline, highlights |
| `sections/Contact.jsx` | Email, GitHub, LinkedIn URLs |
| `sections/Projects.jsx` | Project titles, descriptions, tech stacks, links |
| `public/video.mp4` | Hero background video — replace with your own |

---

## 🎬 Video Optimisation with FFmpeg

For best hero video performance, encode your video with:

```bash
ffmpeg -i input.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset slow \
  -an \
  -vf scale=1920:-2 \
  public/video.mp4
```

**Recommended settings:**

| Setting | Value |
|---------|-------|
| Format | MP4 (H.264) + WebM (VP9) fallback |
| Resolution | 1920×1080 max |
| Bitrate | 2–4 Mbps |
| Duration | 10–30 seconds |
| Audio | Strip (silent background loop) |

> 💡 The custom neon colour palette is defined in `tailwind.config.js`. Key tokens: `neon-cyan`, `neon-blue`, `neon-pink`, `neon-purple`. Custom animations: `glow-pulse`, `float`, `border-glow`, `marquee`, `shimmer`.

---

## 🌍 Deployment

### Vercel *(Recommended)*

```json
{
  "installCommand": "cd App && npm install",
  "buildCommand": "cd App && npm run build",
  "outputDirectory": "App/web/.next",
  "framework": "nextjs"
}
```

Import the repo on [vercel.com](https://vercel.com) — zero extra config needed.

### Netlify

`netlify.toml` is included for Netlify deployments:

```toml
[build]
  base    = "App/web"
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

**Built with ❤️ and too much ☕ by Ayushman Dixit**

[![GitHub](https://img.shields.io/badge/GitHub-lukeewarmcoder-181717?style=flat-square&logo=github)](https://github.com/lukeewarmcoder)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayushman%20Dixit-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/ayushman-dixit-a486512b6)
[![Email](https://img.shields.io/badge/Email-ayushmandixit585%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:ayushmandixit585@gmail.com)

<br/>

⭐ If you liked this portfolio, consider giving it a star!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6E40C9,100:0f0f0f&height=100&section=footer" />

</div>
