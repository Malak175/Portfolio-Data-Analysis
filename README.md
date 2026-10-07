# Malak Mahmoud — Data Analyst Portfolio

A personal portfolio for Malak Mahmoud, an aspiring Data Analyst and Information Technology graduate. The site presents her analytics and frontend skills, selected projects, education, certifications, and contact information.

## About the project

This is a frontend-only, single-page React application built with Vite. Portfolio content is maintained as static data in `src/data/profile.ts`. There is no backend, API, database, or authentication.

## Main features

- Responsive portfolio page with anchor navigation and a mobile menu
- Hero section with profile photo, CV, GitHub, and LinkedIn links
- About, skills, featured projects, education, certifications, and contact sections
- Light/dark theme toggle with the preference saved in browser storage
- Project screenshot previews with click-to-enlarge interaction
- Scroll-triggered reveal animations, with reduced-motion support
- Contact form that opens a prefilled message in the visitor's email application

## Portfolio sections

The page contains:

1. Home / Hero
2. About
3. Skills
4. Featured projects
5. Education & Certifications
6. Contact

Featured work includes an Excel workforce dashboard, an X-O (Tic-Tac-Toe) Python game, and the Beanora Café management system. Project descriptions and outbound links are maintained in the portfolio data.

## Technologies

- React 19 and TypeScript
- Vite
- Tailwind CSS 4 and `tw-animate-css`
- Radix UI primitives
- Lucide React icons
- Vitest, Testing Library, and jsdom for tests

## Project structure

```text
public/                  Static public files, including the favicon
src/
  assets/                Profile and project images
  components/
    portfolio/           Portfolio sections and shared portfolio UI
    ui/                  Reusable UI primitives
  data/profile.ts        Portfolio content, links, skills, and project data
  hooks/                 Shared React hooks
  lib/                   Shared frontend utilities
  test/                  Test setup and application tests
  App.tsx                Main portfolio composition
  index.css              Tailwind imports, theme tokens, and global styles
  main.tsx               React browser entry point
index.html               Vite HTML entry point and page metadata
vite.config.ts           Vite, React, Tailwind, and source alias configuration
vitest.config.ts         Test runner configuration
```

## Run locally

Install the project dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available npm commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run build:dev` | Build using Vite's development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run format` | Format project files with Prettier |

## Production build

Run:

```bash
npm run build
```

The deployable static site is generated in `dist/`. To inspect it locally after building, run `npm run preview`.

## Contact and portfolio links

- Email: [malak.mahmoud.zayed5@gmail.com](mailto:malak.mahmoud.zayed5@gmail.com)
- GitHub: [github.com/Malak175](https://github.com/Malak175)
- LinkedIn: [linkedin.com/in/malak-zayed-a5674a322](https://www.linkedin.com/in/malak-zayed-a5674a322)
- CV: [View CV](https://drive.google.com/file/d/1uSBYmKGRL6h4CdyInzKD6ZF8JXoCt9jF/view?usp=drive_link)

## Credits

Portfolio content, project images, and profile photography are maintained with the project. UI primitives are built on Radix UI; icons are provided by Lucide React.
