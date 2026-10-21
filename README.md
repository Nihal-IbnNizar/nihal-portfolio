# Muhammed Nihal – QA Automation Engineer Portfolio

A modern, high-performance, responsive portfolio website built with pure Vanilla HTML5, CSS3, and JavaScript, designed with clean separation of concerns and optimized for zero-config deployment on Vercel.

---

## 📁 Project Architecture & Separation of Concerns

```text
nihal-portfolio/
├── index.html          # Semantic HTML structure & SEO / Social meta tags
├── css/
│   ├── variables.css   # Color palette, typography tokens, layout variables
│   └── style.css       # Layouts, components, bento grid, micro-interactions, responsive CSS
├── js/
│   ├── data.js         # Single source of truth for all portfolio content (Projects, Skills, etc.)
│   ├── icons.js        # Lightweight SVG icon paths & doodle renderers
│   └── main.js         # DOM rendering, scrollspy navigation, form interaction & toasts
├── vercel.json         # Vercel caching, clean URLs, and security headers
├── package.json        # Project metadata and local preview scripts
├── .gitignore          # Excluded system & cache files
└── README.md           # Documentation and deployment guide
```

---

## ⚡ How to Customize Your Content

All portfolio content is separated into `js/data.js`. You do **not** need to touch HTML or CSS to update your details:

- **Bio / Headline / Contact**: Edit `PORTFOLIO_DATA.profile`
- **Daily Drivers**: Edit `PORTFOLIO_DATA.dailyDrivers`
- **Projects**: Add or edit objects in `PORTFOLIO_DATA.projects`
- **Skills & Categories**: Edit `PORTFOLIO_DATA.expertise`
- **Experience Timeline**: Add roles to `PORTFOLIO_DATA.experience`
- **Education**: Edit `PORTFOLIO_DATA.education`
- **Seminars & Workshops**: Edit `PORTFOLIO_DATA.seminars`
- **Social / Contact Links**: Edit `PORTFOLIO_DATA.contact`

---

## 💻 Local Testing & Preview

You can open `index.html` directly in your browser, or run a local lightweight dev server:

```bash
# Using npm script:
npm run dev

# Or directly with npx:
npx serve .
```

---

## 🚀 Step 1: Push to GitHub

### 1. Initialize Git in this directory
Open your terminal in `d:\folder-name` and run:

```bash
git init
git add .
git commit -m "Initial commit: modular portfolio structure"
```

### 2. Create a new repository on GitHub
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `nihal-portfolio` (or your preferred name)
3. Choose **Public**
4. Leave "Add a README file", ".gitignore", and "license" **unchecked** (we already have them)
5. Click **Create repository**

### 3. Link and push to GitHub
Run the following commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nihal-portfolio.git
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel (Free & Instant)

### Option A: Via the Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Under **"Import Git Repository"**, find `nihal-portfolio` and click **"Import"**.
4. Project Settings:
   - **Framework Preset**: *Other* (static site, detected automatically)
   - **Root Directory**: `./` (default)
5. Click **"Deploy"**.
6. Within seconds, your site will be live at `https://your-project-name.vercel.app` with free SSL!

> ✨ **Bonus**: Every time you push changes to GitHub (`git push`), Vercel will automatically re-deploy your site!

### Option B: Via Vercel CLI (Alternative)
You can also deploy directly from the command line:

```bash
npx vercel
```
Follow the interactive prompts (login, confirm project root, deploy). To deploy directly to production:
```bash
npx vercel --prod
```
