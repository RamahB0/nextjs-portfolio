# nextjs-portfolio

A personal portfolio website built with **Next.js**. It showcases skills, projects, and contact information, and demonstrates styling, images, page-based routing, and server-side rendering.

## Features

- **Page-based routing** using Next.js file-based routing (`/`, `/about`, `/projects`, `/contact`).
- **Styling** with CSS Modules (one module per component/page) plus global CSS variables.
- **Optimized images** via the `next/image` component (profile picture and project thumbnails).
- **Server-Side Rendering** on the About page via `getServerSideProps`.
- **Static generation** of the projects list via `getStaticProps`.
- **Reusable components**: `Layout`, `Navbar`, and `ProjectCard`.

## Project structure

```
components/
  Layout.js        # Shared page wrapper (Navbar + footer)
  Navbar.js        # Navigation with active-link highlighting
  ProjectCard.js   # Reusable project card
pages/
  _app.js          # Wraps every page in Layout, imports global CSS
  _document.js     # Custom HTML document (lang, meta)
  index.js         # Home / hero
  about.js         # About + skills (SSR)
  projects.js      # Projects grid (SSG)
  contact.js       # Contact form
styles/
  globals.css
  *.module.css     # Scoped CSS modules
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

> Note: add your images to `public/images/` (e.g. `profile.jpg`, `project-*.jpg`).

## Deployment

Deploy easily to [Vercel](https://vercel.com). Push this repo to GitHub and import it into Vercel.
