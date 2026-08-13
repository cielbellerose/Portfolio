# Personal Portfolio (In Progress)

Personal portfolio site built with React, TypeScript, and Vite

## Tech Stack

- **React 19** + **TypeScript** — UI and component structure
- **Vite** — dev server and build tooling
- **React Router** — client-side routing (`src/App.tsx` renders a shared `NavBar`/`Header` shell with an `<Outlet />` for page content)
- **CSS Modules** (`*.module.css`) — scoped component styles, alongside global styles in `src/index.css` / `src/App.css`
- **ESLint** + **Prettier** — linting and formatting
- **@vercel/analytics** — site analytics, deployed on Vercel

## Project Structure

```
src/
  pages/          Route-level views (Home, Resume, More, Contact)
  components/     Reusable UI pieces (NavBar, Header, Card, Skillset ...)
  assets/         Images, Resume PDF, Icons
  App.tsx         Root layout: NavBar + Header + routed page content
  main.tsx        App entry point, router setup
```

## Getting Started

Requires [Node.js](https://nodejs.org/) (v20+ recommended) and npm.

```bash
npm install    # install dependencies
npm run dev    # start the dev server (with hot reload) at http://localhost:5173
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite dev server with hot module reload |
| `npm run build` | Type-checks the project (`tsc -b`) then builds the production bundle to `dist/` |
| `npm run preview` | Serves the production build locally to sanity-check before deploying |
| `npm run lint` | Runs ESLint across the project |
| `npm run format` | Formats the codebase with Prettier |
| `npm run format:check` | Checks that all files are formatted, without writing changes |

## Initial Designs

<img width="624" height="562" alt="Screenshot 2026-08-12 at 10 37 53 AM" src="https://github.com/user-attachments/assets/a9bdeff2-236e-4bfe-a6ef-3e3b132638e5" />
<img width="622" height="438" alt="Screenshot 2026-08-12 at 10 38 15 AM" src="https://github.com/user-attachments/assets/c5131d1d-74b4-4237-b4b1-0f89f8d97043" />


<img width="621" height="368" alt="Screenshot 2026-08-12 at 10 38 40 AM" src="https://github.com/user-attachments/assets/d5b8107f-bcac-46fa-9f80-94b2aa2497c2" />
<img width="626" height="585" alt="Screenshot 2026-08-12 at 10 39 22 AM" src="https://github.com/user-attachments/assets/9f76e41f-7ef7-4a91-931e-94a1e5952ed4" />

-<img width="215" height="604" alt="Screenshot 2026-08-12 at 10 41 33 AM" src="https://github.com/user-attachments/assets/732cc540-6212-4ae0-b838-61e74c274a6f" />
