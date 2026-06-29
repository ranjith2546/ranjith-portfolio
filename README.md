# Ranjith Kumar G - Portfolio Website

A modern, dark-themed personal portfolio built with React + Vite.

## Quick Start

```bash
# Navigate to the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deploy to Netlify (Free)

### Option 1: Drag & Drop (Fastest)

1. Run `npm run build` in the project folder
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder into the browser
4. Your site is live! Netlify gives you a URL like `random-name.netlify.app`
5. You can customize the subdomain in Site Settings > Domain management

### Option 2: Git-based Deploy (Auto deploys on push)

1. Push this project to a GitHub/GitLab repo
2. Go to [https://app.netlify.com](https://app.netlify.com) and sign up/login
3. Click "Add new site" > "Import an existing project"
4. Connect your GitHub account and select the repo
5. Build settings will be auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Every push to main will trigger a new deployment automatically

### Option 3: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from the portfolio folder)
netlify deploy --prod --dir=dist
```

## Custom Domain (Optional)

1. In Netlify dashboard, go to Site Settings > Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., ranjithkumar.dev)
4. Update your DNS records as instructed by Netlify
5. Netlify provides free SSL automatically

## Tech Stack

- React 18
- Vite 6
- Pure CSS (no framework - matches the original design)
- Google Fonts (Space Grotesk + JetBrains Mono)

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollReveal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── netlify.toml
├── package.json
└── vite.config.js
```
