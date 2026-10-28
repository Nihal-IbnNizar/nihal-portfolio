# Muhammed Nihal – QA Automation Engineer Portfolio

A modern, high-performance, responsive portfolio website engineered with clean separation of concerns, built with **Vite**, **TypeScript**, **Lenis Smooth Scroll**, and **GSAP ScrollTrigger**, optimized for zero-config deployment on Vercel.

---

## 📁 Architecture & Separation of Concerns

```text
nihal-portfolio/
├── index.html                  # Semantic HTML structure & SEO / Social meta tags
├── src/
│   ├── animations/             # High-performance scroll physics & canvas renderers
│   │   ├── smoothScroll.ts     # Lenis smooth-scroll initialization & GSAP ticker sync
│   │   ├── workStack.ts        # GSAP ScrollTrigger timeline for card stack pinning
│   │   ├── keyboardAssembly.ts # GSAP ScrollTrigger 3D keyboard assemble / scatter
│   │   ├── heroCanvas.ts       # Optimized dual-layer dot grid with cursor glow & ripple
│   │   ├── spotlightGlow.ts    # Mouse-following radial gold glow on cards
│   │   └── scrollReveal.ts     # Scroll-triggered reveals & doodle stroke drawing
│   ├── components/             # Decoupled interactive feature modules
│   │   ├── renderers.ts        # Typed DOM renderers for projects, skills, timeline, etc.
│   │   ├── testTerminal.ts     # Interactive mini test runner with confetti celebration
│   │   ├── bugHunter.ts        # Easter egg bug detector widget
│   │   ├── contactForm.ts      # Mailto generator, form validation & email clipboard copy
│   │   ├── scrollSpy.ts        # Active navbar section tracking
│   │   └── toast.ts            # Global toast notifications
│   ├── data/                   # Single source of truth for portfolio content
│   │   ├── schema.ts           # Strict TypeScript interfaces for data safety
│   │   └── portfolioData.ts    # Structured content (Profile, Projects, Skills, Timeline)
│   ├── icons/                  # Vector icon repository & procedural hand-drawn doodles
│   │   └── icons.ts            # SVG icon paths and stroke generators
│   ├── styles/                 # Modular CSS architecture
│   │   ├── tokens/             # Design tokens (colors, typography, radii, transitions)
│   │   ├── base/               # Reset, typography, container, focus outlines
│   │   ├── components/         # Buttons, cards, header, terminal, keyboard, toast
│   │   ├── sections/           # Hero, work, expertise, experience, seminars, contact
│   │   └── main.css            # Root stylesheet importing all modules & Lenis classes
│   ├── main.ts                 # Main bootstrap entry point
│   └── vite-env.d.ts           # Vite client environment types
├── package.json                # Dependencies, build scripts & dev tools
├── tsconfig.json               # Strict TypeScript configuration
├── vite.config.ts              # Vite bundling pipeline & production setup
├── vercel.json                 # Vercel deployment caching & security headers
├── .gitignore                  # Git exclusions (node_modules, dist)
└── README.md                   # Documentation and deployment guide
```

---

## ⚡ How to Customize Your Content

All portfolio content is maintained in `src/data/portfolioData.ts` with strict TypeScript validation. You do **not** need to touch HTML or CSS to update your details:

- **Bio / Headline / Contact**: Edit `PORTFOLIO_DATA.profile`
- **Daily Drivers**: Edit `PORTFOLIO_DATA.dailyDrivers`
- **Projects**: Add or edit objects in `PORTFOLIO_DATA.projects`
- **Skills & Categories**: Edit `PORTFOLIO_DATA.expertise`
- **Experience Timeline**: Add roles to `PORTFOLIO_DATA.experience`
- **Education**: Edit `PORTFOLIO_DATA.education`
- **Seminars & Workshops**: Edit `PORTFOLIO_DATA.seminars`
- **Social / Contact Links**: Edit `PORTFOLIO_DATA.contact`

---

## 💻 Local Development & Build

```bash
# Start local development server with instant HMR:
npm run dev

# Run TypeScript type check and create production bundle:
npm run build

# Preview production build locally:
npm run preview

# Automatically format codebase:
npm run format
```

---

## 🚀 Deployment to Vercel

The project is pre-configured with `vercel.json` for automatic builds:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Asset Caching**: 1-year immutable caching on hashed assets

Push your changes to GitHub (`git push origin main`), and Vercel will build and deploy automatically!
