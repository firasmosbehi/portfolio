# Agent Guide: my-portfolio

This document contains essential context for AI coding agents working on this project. The reader is expected to know nothing about the project beforehand.

---

## Project Overview

This is a **personal portfolio website** for Firas Mosbehi, a DevSecOps Engineer. It is a modern, responsive, single-page-style site built with Next.js and deployed as a multi-route application. The site showcases professional experience, projects, skills, education, and contact information.

The project is licensed under the MIT License.

---

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | [Next.js](https://nextjs.org) | 16.1.0 (App Router) |
| UI Library | [React](https://react.dev) | 19.2.3 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 4 |
| Font | Geist (Sans + Mono) via `next/font/google` | — |
| Linting | [ESLint](https://eslint.org/) | 9 |

### Key Configuration Files

- **`package.json`** — Dependencies and npm scripts.
- **`next.config.ts`** — Next.js configuration (currently minimal/default).
- **`tsconfig.json`** — TypeScript compiler options. Uses `"strict": true`, `"jsx": "react-jsx"`, and path alias `@/*` mapped to `./*`.
- **`postcss.config.mjs`** — PostCSS config loading `@tailwindcss/postcss` for Tailwind v4.
- **`eslint.config.mjs`** — ESLint flat config extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start the development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start the production server
npm start

# Run ESLint
npm run lint
```

There is **no test suite** configured in this project. If you add tests, update `package.json` scripts accordingly.

---

## Project Structure

```
my-portfolio/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home page (renders Hero)
│   ├── layout.tsx                # Root layout with metadata, fonts, structured data
│   ├── globals.css               # Tailwind entry + global styles + mobile optimizations
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── components/               # Shared React components (all co-located here)
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── About.tsx             # About me section
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── Projects.tsx          # Featured projects grid
│   │   ├── Skills.tsx            # Skills showcase
│   │   ├── Education.tsx         # Education section
│   │   ├── Contact.tsx           # Contact section
│   │   ├── Navigation.tsx        # Top nav bar + mobile hamburger menu
│   │   ├── Footer.tsx            # Site footer
│   │   ├── LayoutWrapper.tsx     # Client-side wrapper: wheel/keyboard nav, layout shell
│   │   ├── PageTransition.tsx    # Fade-in page transition wrapper
│   │   ├── AnimatedSection.tsx   # IntersectionObserver-based scroll reveal
│   │   └── FadeInStagger.tsx     # Staggered fade-in for child elements
│   ├── about/page.tsx            # Route: /about
│   ├── contact/page.tsx          # Route: /contact
│   ├── education/page.tsx        # Route: /education
│   ├── experience/page.tsx       # Route: /experience
│   ├── projects/page.tsx         # Route: /projects
│   └── skills/page.tsx           # Route: /skills
├── public/                       # Static assets
│   ├── cv.pdf                    # Resume/CV download
│   └── robots.txt                # SEO robots rules
└── ...config files
```

### Routing Architecture

The site uses **Next.js App Router** with the following routes:

| Route | Page Component |
|-------|---------------|
| `/` | `Hero` |
| `/about` | `About` |
| `/experience` | `Experience` |
| `/projects` | `Projects` |
| `/skills` | `Skills` |
| `/education` | `Education` |
| `/contact` | `Contact` |

Each route is a thin server component that exports `metadata` for SEO and wraps the section component in `PageTransition`.

---

## Code Style and Conventions

### Component Patterns

- **Functional components** only. Default exports are used for page and section components.
- **Client components** use the `'use client'` directive at the top of the file. This is required for any component using React hooks (`useState`, `useEffect`, `useRef`, etc.) or browser APIs (`window`, `document`, `navigator`).
- **Server components** (default in App Router) are used for route pages to export `metadata`.

### Styling Conventions

- **Tailwind CSS v4** utility classes are used exclusively for styling.
- **Color palette**: `zinc` for neutrals, `blue` and `cyan` for accents. Dark mode variants use `dark:` prefixes.
- **Responsive prefixes**: `sm:`, `md:`, `lg:` are used heavily. The codebase is **mobile-first**.
- **Custom properties**: CSS variables `--background` and `--foreground` are defined in `globals.css` and mapped via `@theme inline`.
- Common utility patterns seen in the codebase:
  - `min-h-screen flex items-center justify-center` for vertically centered sections
  - `max-w-7xl mx-auto px-4 sm:px-6` for consistent content width and padding
  - `transition-all duration-300` / `hover:scale-105` / `active:scale-95` for interactive feedback
  - `will-change-transform` and `translateZ(0)` for hardware-accelerated animations

### Accessibility

- `aria-label` attributes on interactive elements (buttons, links).
- `aria-expanded` on mobile menu toggle.
- `role="doc-subtitle"` on subtitle elements.
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- `prefers-reduced-motion` media query globally disables animations for users who request it.
- Mobile tap targets are enforced to minimum 44×44px.

### Animation Strategy

- `AnimatedSection` — Uses `IntersectionObserver` to trigger a fade+translate animation when the section enters the viewport.
- `FadeInStagger` — Similar to `AnimatedSection` but supports a configurable `delay` prop for staggered child animations.
- `PageTransition` — Simple mount-based fade-in used on every route page.
- `LayoutWrapper` handles **wheel scrolling navigation** and **arrow key navigation** on desktop (disabled on mobile). It debounces wheel events and locks navigation for 800ms between route changes.

---

## SEO and Metadata

- Every route exports a `Metadata` object with `title`, `description`, and OpenGraph tags.
- `layout.tsx` contains comprehensive root metadata: default title template, keywords, robots, canonical URL, Twitter card, and Google site verification placeholder.
- **Structured Data**: A JSON-LD `Person` schema is injected into `<head>` in `layout.tsx`.
- **`app/sitemap.ts`** dynamically generates a sitemap at `/sitemap.xml`.
- **`public/robots.txt`** allows all crawlers and points to the sitemap.

> **Important**: Update the Google site verification code in `layout.tsx` (`metadata.verification.google`) and the `baseUrl` in `sitemap.ts` if the domain changes.

---

## Mobile-First Design

The site is heavily optimized for mobile devices:

- Wheel/keyboard navigation is **disabled on mobile** (`window.innerWidth < 1024` or touch devices).
- CSS reduces `animation-duration` and `transition-duration` to `0.3s` on mobile for performance.
- `overscroll-behavior-y: none` prevents bounce on iOS.
- `-webkit-overflow-scrolling: touch` enables smooth scrolling on iOS.
- `touch-action: manipulation` removes double-tap zoom delays.
- `overflow-x: hidden` on mobile body prevents horizontal scroll.

---

## Deployment Notes

- `next.config.ts` is currently minimal. If deploying to static hosting (e.g., GitHub Pages, Cloudflare Pages), you may need to add `output: 'export'` and configure `distDir` or `images.unoptimized`.
- The site expects a custom domain (`https://firasmosbahi.com`) as referenced in metadata and sitemap.
- The `public/cv.pdf` file is served at `/cv.pdf`.

---

## Security Considerations

- No user input forms or authentication exist in the current codebase.
- `dangerouslySetInnerHTML` is used **only once** in `layout.tsx` to inject the JSON-LD structured data. The content is hardcoded and safe.
- External links (e.g., CV download, social links) should use `rel="noopener noreferrer"` when opening in a new tab.

---

## When Making Changes

- Keep components in `app/components/` unless they are route-specific.
- Export `Metadata` from every new route page for consistent SEO.
- Wrap route content in `PageTransition` to maintain consistent enter animations.
- Use `AnimatedSection` and `FadeInStagger` for scroll-reveal effects.
- Update `LayoutWrapper`'s `routes` array if adding or reordering top-level routes (this array drives the wheel/keyboard navigation order).
- Update `sitemap.ts` when adding new routes.
- Maintain mobile-first responsive class ordering (`sm:`, `md:`, `lg:`).
- Prefer `next/link` for internal navigation and `next/font` for fonts.
