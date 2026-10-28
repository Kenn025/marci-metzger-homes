# Marci Metzger Homes — Pahrump Realtor

A single-page realtor site (TanStack Start + React 19 + Tailwind CSS v4).
This copy is self-contained: every photo lives in `src/assets/site/` and is
imported directly, so it runs without external application services.

## Requirements

- Node.js 20.19+ (22 LTS recommended) — https://nodejs.org
- npm (comes with Node), or Bun

## Run it locally

```sh
npm install
npm run dev
```

Then open the URL the terminal prints (usually http://localhost:5173).

## Other scripts

```sh
npm run build      # production build
npm run preview    # serve the production build
npm run lint       # ESLint
npm run format     # Prettier
npm run test       # Vitest
```

## Open in VS Code or Antigravity

1. Unzip this folder somewhere permanent.
2. VS Code: **File → Open Folder…** and pick it. Antigravity: same (it is
   VS Code-based) — open the folder, then use its terminal for `npm install`
   and `npm run dev`.
3. Install the "Tailwind CSS IntelliSense" and "ESLint" extensions for the
   best editing experience.

## Where things are

| Path                    | What it is                                                       |
| ----------------------- | ---------------------------------------------------------------- |
| `src/routes/index.tsx`  | The whole page — sections in order, plus text and photo data     |
| `src/routes/__root.tsx` | Page shell, `<head>` metadata, Google Fonts links                |
| `src/styles.css`        | Design tokens (colours, fonts, shadows) and shared button styles |
| `src/assets/site/`      | Photos and logos                                                 |
