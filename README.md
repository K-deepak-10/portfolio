# Deepak Karthik — Portfolio

A React + Vite + Tailwind CSS personal portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are written to `dist/`. Deploy that folder to any
static host (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  components/   One file per section (Navbar, Hero, CodeWindow, About,
                Experience, Projects, ProjectCard, Skills, Education,
                Certifications, Contact, Footer)
  data.js       All resume-sourced content in one place — edit this file
                to update any text, project, or link without touching
                component code.
  useReveal.js  Shared scroll-reveal hook.
public/
  Deepak_Karthik_Resume.pdf   Served by the "Download Resume" buttons.
```

## Content sources

- All personal, education, experience, skills and certification details
  come directly from the uploaded resume.
- The GitHub project details (Time-Limited Deal, Diabetes Risk Factor
  Analysis Dashboard, Cooking Chatbot, ChatBot, CodeGuardAI) come from
  the project brief you supplied, including their repository URLs.
- Two resume-listed items — "Chatbot Development" (NIT-Trichy) and the
  "E-Commerce Website" (T4TEQ) — are shown as projects, matching how
  they're described on the resume, since no GitHub link was provided
  for either.
- The GitHub profile link (`github.com/K-deepak-10`) is inferred from
  the repository owner in the project URLs, since no direct profile
  link was in the resume. Swap it out in `src/data.js` if it's wrong.
- No metrics, accuracy figures, deployments, or job titles were
  invented. CodeGuardAI is marked "Currently Building" and has no
  GitHub button, matching its current status.

## To update content

Everything text-based lives in `src/data.js`. Update `profile`,
`experience`, `projects`, `skills`, `education`, or `certifications`
there — the components render from that file automatically.
