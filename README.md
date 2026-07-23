# samuel.dev

Personal portfolio built with Astro, focused on performance, technical SEO, and project presentation.

## Overview

This project includes:

- project section with category filters
- image carousel with lightbox
- availability status for each project
- experience, skills, technologies, and contact section
- SEO configured with metadata, Open Graph, JSON-LD, sitemap, and robots

## Technologies

- Astro
- TypeScript
- CSS
- ESLint
- Prettier

## Requirements

- Node.js 18+
- npm 9+

## Run Locally

```bash
npm install
npm run dev
```

Local application:

- [http://localhost:4321](http://localhost:4321)

## Available Scripts

- `npm run dev`: starts the development environment
- `npm run build`: generates a production build
- `npm run preview`: starts a local build preview
- `npm run lint`: runs linting
- `npm run format`: checks formatting with Prettier
- `npm run format:fix`: automatically fixes formatting
- `npm run typecheck`: runs type checking with `astro check`
- `npm run check`: runs lint, format, typecheck, and build

## Main Structure

```text
src/
  components/    UI components
  data/          project content and personal data
  layouts/       base layout and meta tags
  pages/         Astro pages
  styles/        global styles
public/
  projects/      images used in cards
```

## Deployment

The project is ready for static build output:

```bash
npm run build
```

The final files are generated in `dist/`.
