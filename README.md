# Marci Metzger Homes — Pahrump Realtor

A modern, high-performance, single-page real estate website built with **TanStack Start v1**, **React 19**, and **Tailwind CSS v4**.

All imagery is compressed to WebP in `src/assets/site/` and imported directly, with no external CMS or media service.

---

## ⚡ Tech Stack

- **Framework:** TanStack Start v1 (`@tanstack/react-start`, `@tanstack/react-router`)
- **UI Library:** React 19 + shadcn/ui primitives (Radix UI)
- **Styling:** Tailwind CSS v4 with CSS custom properties (OKLCH design tokens)
- **Icons:** Lucide React & Font Awesome (social icons)
- **Smooth Scrolling:** Lenis with custom exponential decay
- **Motion & Animations:** Custom GPU-accelerated IntersectionObserver reveal hook (`useSectionReveal`) + animated counter hook (`useCountUp`)
- **Validation:** Zod & React Hook Form
- **Testing:** Vitest + `@testing-library/react`
- **Build & Dev:** Vite 8 + Nitro

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.19+ (Node 22 LTS recommended)
- **Package Manager**: pnpm (recommended), npm, or bun

### Local Development

```sh
pnpm install
pnpm dev
```

Open the local server URL displayed in your terminal (typically `http://localhost:3000`).

---

## 🛠️ Available Scripts

| Command        | Description                                    |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Starts local development server with HMR       |
| `pnpm build`   | Compiles production SSR bundle & static assets |
| `pnpm preview` | Serves the production build locally            |
| `pnpm test`    | Runs unit & routing tests with Vitest          |
| `pnpm lint`    | Analyzes codebase for errors via ESLint        |
| `pnpm format`  | Formats all code via Prettier                  |

---

## 🎨 Design System & Colors

The project uses an earthy, desert-inspired luxury palette defined as CSS tokens in `src/styles.css`:

- **Primary (`--primary`):** Terracotta / desert clay (`oklch(0.56 0.11 45)` / approx `#c25e2e`)
- **Ink (`--ink`):** Deep charcoal used for the footer and dark sections (`oklch(0.18 0.01 60)`)
- **Accent (`--accent`):** Warm gold / desert sand (`oklch(0.74 0.09 75)`)
- **Background (`--background`):** Warm off-white (`oklch(0.975 0.008 80)`)
- **Destructive (`--destructive`):** Form alert and error red (`oklch(0.577 0.245 27.325)`)
- **Typography:**
  - **Headings:** _Cinzel_ (`--font-display`, serif)
  - **Body Text:** _Source Sans Pro_ (`--font-sans`, sans-serif)

---

## ✨ Features & User Experience

- **Responsive Cookie Banner:** Fixed to the bottom-right corner with a cookie icon, styled using native theme tokens, and persists user choices via `localStorage`.
- **Hardware-Accelerated Section Reveal:** Uses `translate3d` and IntersectionObserver with responsive adaptations (converting horizontal slides to clean vertical rises on mobile screens).
- **Animated Stats with Stable Layout:** Numerical counter hook (`useCountUp`) displays key metrics (`~30`, `$28.5M`, `90`) with reserved dimensions so column separators never shift during animations.
- **Swipeable Photo Gallery:** Supports pointer and touch swipe gestures, auto-advances, and displays an overlaid slide badge in the top-left corner.
- **SEO & Accessibility:**
  - Schema.org JSON-LD structured data for real estate agents
  - Valid semantic HTML5 landmarks and WCAG-compliant skip-to-content links
  - Respects the user's `prefers-reduced-motion` settings automatically

---

## 📄 License

Built as a hiring-assignment demo. Text and images belong to Marci Metzger and The Ridge Realty Group; not for commercial use.
