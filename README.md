<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0f0f,100:6E40C9&height=200&section=header&text=Portfolio&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=Personal%20Portfolio%20%E2%80%94%20Ayushman%20Dixit&descAlignY=58&descSize=18" />

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&pause=1000&color=6E40C9&center=true&vCenter=true&width=600&lines=Full-Stack+Developer+%F0%9F%9A%80;BTech+CS+Student+%F0%9F%8E%93;Building+Clean+Code+%26+Smart+Solutions+%E2%9C%A8;Next.js+14+%7C+Tailwind+%7C+Framer+Motion)](https://git.io/typing-svg)

<br/>

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Demo-Visit%20Portfolio-6E40C9?style=for-the-badge)](https://portfolio-git-main-lukeewarmcoders-projects.vercel.app/)
[![Report Bug](https://img.shields.io/badge/%F0%9F%90%9B%20Report-Bug-ff4757?style=for-the-badge)](https://github.com/lukeewarmcoder/portfolio/issues)
[![Request Feature](https://img.shields.io/badge/%E2%9C%A8%20Request-Feature-2ed573?style=for-the-badge)](https://github.com/lukeewarmcoder/portfolio/issues)

<br/>

![Next.js](https://img.shields.io/badge/Next.js%2014-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

</div>

---

## 📸 Preview

<img width="1779" height="996" alt="image" src="https://github.com/user-attachments/assets/ca31e4ff-9ff3-47aa-8241-2aae10527b94" />
<img width="1586" height="983" alt="image" src="https://github.com/user-attachments/assets/d93d3982-adc6-4fc3-9086-ac44c68e457c" />
<img width="1508" height="951" alt="image" src="https://github.com/user-attachments/assets/e8cb1755-a08e-40ee-8184-699ecdf26cae" />
<img width="1519" height="858" alt="image" src="https://github.com/user-attachments/assets/20870632-23a5-4461-a632-b1c58419c40a" />
<img width="1513" height="975" alt="image" src="https://github.com/user-attachments/assets/beea20db-7bc4-4ca1-90e9-a3102b176bbf" />
<img width="1609" height="677" alt="image" src="https://github.com/user-attachments/assets/0a16e1ff-7f11-41f4-92a3-0b63670a3947" />
<img width="1498" height="834" alt="image" src="https://github.com/user-attachments/assets/b9a432fa-3a2b-4f23-8112-02dbe71a30d5" />

---

## ✨ Features

### 🎬 Visual & UX
- **Cinematic Hero Section** — full-screen video background with lazy-load fallback & gradient parallax scrolling
- **Availability Badge** — live ping indicator 🟢 with animated pulse
- **Custom Cursor** — glow trail effect (desktop only, disabled on touch devices)
- **Glassmorphism UI** — frosted-glass cards with gradient micro-borders and dynamic glow
- **Ambient neon orbs**, scanline overlay & grid-line tech textures

### ⚙️ Interactive Components
- **3D Interactive Webbing** — fully 3D particle network with perspective projection, depth sorting, gradient connection lines and glow nodes that react to mouse in real time
- **Mouse Repulsion** — particles and webbing physically push away from your cursor
- **3D Tilt Cards** — perspective tilt on hover with dynamic glow tracking
- **Animated Counters** — scroll-triggered number animations
- **Smart Navigation** — glassmorphism navbar with active section highlighting
- **Infinite Marquee Ticker** — scrolling tech showcase

### 📄 Resume
- **One-click Resume Download** — available in both the Hero section and Navbar
- Downloads as `Ayushman_Dixit_Resume.pdf` directly

### 📊 Data & Contact
- **Working Contact Form** — powered by Formspree, messages delivered directly to email
- **Live GitHub Stats** — real-time data fetched from the GitHub REST API
- **SEO & Performance** — Open Graph & Twitter Card meta tags, JSON-LD structured data (Person schema)
- **Dynamic Imports** — heavy client components lazy-loaded for performance

### 🌐 Sections

| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Cinematic full-screen video intro with CTA buttons |
| 👤 **About** | Bio, timeline & highlights |
| 🛠 **Skills** | Categorised skill grid with hover-scale badges |
| 🚀 **Projects** | Tilt-card grid with detail modal, tech tags & GitHub links |
| 🔥 **Currently Building** | Live "now building" highlight with pulse indicator |
| 💻 **Tech Stack** | Badge grid + infinite marquee |
| 📈 **GitHub Stats** | Live repos, followers & following from GitHub API |
| 📬 **Contact** | Working contact form via Formspree + social links |

---

## 🗂 Project Structure

```
portfolio/
├── App/
│   ├── package.json               # Monorepo workspace config
│   └── web/                       # Next.js 14 app (main project)
│       ├── app/
│       │   ├── layout.jsx         # Root layout with SEO meta & fonts
│       │   ├── page.jsx           # Home page — assembles all sections
│       │   └── globals.css        # Global styles, animations & design tokens
│       ├── components/
│       │   ├── AnimatedCounter.jsx
│       │   ├── CustomCursor.jsx
│       │   ├── MotionWrapper.jsx
│       │   ├── Navbar.jsx         # With resume download button
│       │   ├── ParticleBackground.jsx  # 3D interactive webbing
│       │   ├── SectionDivider.jsx
│       │   └── TiltCard.jsx
│       ├── sections/
│       │   ├── Hero.jsx           # With resume download button
│       │   ├── About.jsx
│       │   ├── Skills.jsx
│       │   ├── Projects.jsx
│       │   ├── CurrentlyBuilding.jsx
│       │   ├── TechStack.jsx
│       │   ├── GitHubStats.jsx
│       │   ├── Contact.jsx        # Powered by Formspree
│       │   └── Footer.jsx
│       ├── public/
│       │   ├── video.mp4          # Hero background video
│       │   └── resume.pdf         # Downloadable resume
│       ├── tailwind.config.js
│       ├── next.config.js
│       └── postcss.config.mjs
├── vercel.json                    # Vercel deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** `>= 9`

### Installation

```bash
# Clone the repository
git clone https://github.com/lukeewarmcoder/portfolio.git

# Navigate into the Next.js app
cd portfolio/App/web

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
| `app/layout.jsx` | Name, description, social links, SEO metadata |
| `sections/Hero.jsx` | Headline, tagline, CTA links |
| `sections/About.jsx` | Bio paragraph, timeline, highlights |
| `sections/Contact.jsx` | Formspree endpoint, email, social links |
| `sections/Projects.jsx` | Project titles, descriptions, tech stacks, links |
| `public/video.mp4` | Hero background video — replace with your own |
| `public/resume.pdf` | Your resume — replace with your own PDF |

> 💡 The custom neon colour palette is defined in `tailwind.config.js`. Key tokens: `neon-cyan`, `neon-blue`, `neon-pink`, `neon-purple`. Custom animations: `glow-pulse`, `float`, `border-glow`, `marquee`, `shimmer`.

---

## 🎬 Video Optimisation with FFmpeg

For best hero video performance, encode with:

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
| Format | MP4 (H.264) |
| Resolution | 1920×1080 max |
| Bitrate | 2–4 Mbps |
| Duration | 10–30 seconds |
| Audio | Strip completely |

---

## 🌍 Deployment

### Vercel *(Live)*

This project is deployed on Vercel. The `vercel.json` at the repo root is configured as:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

**Vercel Dashboard settings:**
- **Root Directory:** `App/web`
- **Framework:** Next.js

To deploy your own fork:
1. Import the repo on [vercel.com](https://vercel.com)
2. Set **Root Directory** to `App/web`
3. Deploy — zero extra config needed

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
