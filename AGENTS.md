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
| Framework | [Next.js](https://nextjs.org) | 16.4 (App Router) |
| UI Library | [React](https://react.dev) | 19.3 |
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
│   ├── page.tsx                  # Home: Hero, StatsSection, SelectedWork, LatestPosts, GitHubActivity
│   ├── layout.tsx                # Root layout with metadata, fonts, structured data
│   ├── globals.css               # Tailwind entry + global styles + mobile optimizations
│   ├── sitemap.ts                # Sitemap: static routes + blog posts
│   ├── feed.xml/route.ts         # RSS feed
│   ├── api/contact/route.ts      # Contact form POST → Resend (needs RESEND_API_KEY)
│   ├── opengraph-image.tsx       # OG images (per route too, via components/OgImage.tsx)
│   ├── components/               # Shared React components (all co-located here)
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── About.tsx             # About me section
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── Projects.tsx          # Featured projects grid
│   │   ├── Skills.tsx            # Skills showcase
│   │   ├── Education.tsx         # Education section
│   │   ├── Contact.tsx           # Contact section + form
│   │   ├── SelectedWork.tsx      # Home: 4 featured projects
│   │   ├── LatestPosts.tsx       # Home: latest blog posts
│   │   ├── StatsSection.tsx      # Home: impact figures strip
│   │   ├── GitHubActivity.tsx    # Home: live GitHub repos/languages (server fetch, ISR)
│   │   ├── Certifications.tsx, Now.tsx, Testimonials.tsx
│   │   ├── CommandPalette*.tsx   # ⌘K palette + context + trigger
│   │   ├── ThemeProvider.tsx / ThemeToggle.tsx
│   │   ├── MdxComponents.tsx     # Blog MDX element styles
│   │   ├── Navigation.tsx        # Top nav bar + mobile hamburger menu
│   │   ├── Footer.tsx            # Site footer
│   │   ├── LayoutWrapper.tsx     # Layout shell: skip link, nav, main, footer, command palette
│   │   ├── PageTransition.tsx    # Fade-in page transition wrapper
│   │   ├── AnimatedSection.tsx   # IntersectionObserver-based scroll reveal
│   │   └── FadeInStagger.tsx     # Staggered fade-in for child elements
│   ├── about/page.tsx            # Route: /about
│   ├── contact/page.tsx          # Route: /contact
│   ├── education/page.tsx        # Route: /education
│   ├── experience/page.tsx       # Route: /experience
│   ├── projects/page.tsx         # Route: /projects
│   ├── skills/page.tsx           # Route: /skills
│   ├── certifications/, now/, testimonials/   # Routes (testimonials is noindex + unlinked)
│   └── blog/page.tsx, blog/[slug]/page.tsx    # Blog index + MDX posts
├── content/blog/*.mdx            # Blog posts (frontmatter: title, description, date, tags)
├── lib/blog.ts                   # Post loading/sorting
├── lib/seo.ts                    # baseOpenGraph spread into each route's metadata
├── public/                       # Static assets
│   ├── cv.pdf                    # Resume/CV download
│   └── robots.txt                # SEO robots rules
└── ...config files
```

### Routing Architecture

The site uses **Next.js App Router** with the following routes:

| Route | Page Component |
|-------|---------------|
| `/` | `Hero` + home sections |
| `/about` | `About` |
| `/experience` | `Experience` |
| `/projects` | `Projects` |
| `/skills` | `Skills` |
| `/education` | `Education` |
| `/certifications` | `Certifications` |
| `/blog`, `/blog/[slug]` | blog index, MDX post |
| `/now` | `Now` |
| `/testimonials` | `Testimonials` (noindex, not linked) |
| `/contact` | `Contact` |
| `/feed.xml`, `/sitemap.xml`, `/api/contact` | RSS, sitemap, contact POST |

Each route is a thin server component that exports `metadata` (with `alternates.canonical` and `...baseOpenGraph` + `url`) and wraps the section component in `PageTransition`.

---

## Code Style and Conventions

### Component Patterns

- **Functional components** only. Default exports are used for page and section components.
- **Client components** use the `'use client'` directive at the top of the file. This is required for any component using React hooks (`useState`, `useEffect`, `useRef`, etc.) or browser APIs (`window`, `document`, `navigator`).
- **Server components** (default in App Router) are used for route pages to export `metadata`.

### Styling Conventions

- **Tailwind CSS v4** utility classes are used exclusively for styling.
- **Design system ("Control Plane")**: hairline rules, Geist sans + Geist Mono for metadata, one lime signal accent. Design source: the Claude Design canvas "Portfolio Redesign".
- **Color tokens only**: `bg-bg`, `bg-surface`, `border-line`, `divide-line`, `text-fg`, `text-muted`, `text-accent`, `bg-accent`, `bg-fill`, `text-on-fill`. They are CSS variables in `globals.css` (`:root` = light, `.dark` = dark) mapped via `@theme inline`, so no `dark:` color variants are needed. Do not use Tailwind palette colors (`zinc`, `blue`, …), gradients, shadows or `hover:scale-*`.
- Use `bg-accent` (not `bg-fill`) for non-text graphics like bars and dots: lime fill fails 3:1 contrast on the light ground.
- **Dark mode**: `@custom-variant dark` binds `dark:` to the `.dark` class set by `ThemeProvider`.
- **Responsive prefixes**: `sm:`, `md:`, `lg:` are used heavily. The codebase is **mobile-first**.
- Common utility patterns:
  - `max-w-6xl mx-auto px-4 sm:px-6` for content width, `py-20 sm:py-28` for sections
  - Each route's main heading is an `<h1>` with a mono route index (`01`…`10`) in `text-accent`
  - Primary button `bg-fill text-on-fill`; secondary `border border-line hover:border-muted`

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
- Pages scroll normally. The old wheel/arrow-key route navigation in `LayoutWrapper` was removed because it made long pages unscrollable on desktop.

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

- `overscroll-behavior-y: none` prevents bounce on iOS.
- `touch-action: manipulation` removes double-tap zoom delays.
- 44×44px minimum tap targets apply to nav controls and icon buttons only (not inline links).
- `overflow-x: hidden` on mobile body prevents horizontal scroll.

---

## Deployment Notes

- `next.config.ts` is currently minimal. If deploying to static hosting (e.g., GitHub Pages, Cloudflare Pages), you may need to add `output: 'export'` and configure `distDir` or `images.unoptimized`.
- The site expects a custom domain (`https://firasmosbahi.com`) as referenced in metadata and sitemap.
- The `public/cv.pdf` file is served at `/cv.pdf`.

---

## Security Considerations

- The contact form posts to `app/api/contact/route.ts`, which sends mail via Resend. Treat it as a trust boundary: validate input server-side.
- `dangerouslySetInnerHTML` is used **only once** in `layout.tsx` to inject the JSON-LD structured data. The content is hardcoded and safe.
- External links (e.g., CV download, social links) should use `rel="noopener noreferrer"` when opening in a new tab.

---

## When Making Changes

- Keep components in `app/components/` unless they are route-specific.
- Export `Metadata` from every new route page, including `alternates: { canonical: '/route' }` and `openGraph: { ...baseOpenGraph, url: '/route' }` (child metadata replaces, not merges, the root values).
- Wrap route content in `PageTransition` to maintain consistent enter animations.
- Use `AnimatedSection` and `FadeInStagger` for scroll-reveal effects.
- Add new top-level routes to `Navigation.tsx` (`allLinks`, and `primaryLinks` if it belongs in the desktop bar), the command palette, and the footer if relevant.
- Update `sitemap.ts` when adding new routes.
- Maintain mobile-first responsive class ordering (`sm:`, `md:`, `lg:`).
- Prefer `next/link` for internal navigation and `next/font` for fonts.
