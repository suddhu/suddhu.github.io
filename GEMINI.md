# Gemini Context File

## Project Overview
This project is a **personal portfolio website** for Sudharshan Suresh, a robotics researcher. It is based on the [Nim](https://github.com/ibelick/nim) template and utilizes a modern React stack to showcase publications, research work, and professional updates. The site is designed as a minimal, single-page application with rich animations.

## Tech Stack
*   **Framework:** Next.js 16 (App Router, React Server Components)
*   **Core:** React 19
*   **Styling:** Tailwind CSS v4 (PostCSS-based)
*   **Icons:** Lucide React
*   **Animation:** Motion (motion/react), Motion-Primitives
*   **Typography:** Google Fonts (Geist, Geist Mono, Press Start 2P), custom 'Garamond Premier Pro'
*   **Language:** TypeScript (Strict mode)
*   **Deployment:** Static export (`output: 'export'`) optimized for GitHub Pages or Vercel.

## Architecture & Key Patterns
*   **Data-Driven:** All content (bio, research papers, social links, news) is centralized in `app/data.ts`. This is the primary file for content updates.
*   **App Router:** Uses the Next.js App Router structure:
    *   `app/page.tsx`: Main landing page combining News, Research, and Work sections.
    *   `app/layout.tsx`: Root layout, font configurations, and theme provider setup.
    *   `app/header.tsx` & `app/footer.tsx`: Global navigation and site footer.
*   **Component Organization:**
    *   `components/sections/`: Modular page sections like `news-section.tsx`, `research-section.tsx`, and `work-section.tsx`.
    *   `components/ui/`: Reusable, low-level UI components (e.g., `animated-background.tsx`, `morphing-dialog.tsx`).
*   **Media Management:** 
    *   Static assets are located in `public/media/`.
    *   Project-specific sub-pages (e.g., `midastouch-tactile`, `neural-feels`) are hosted as static HTML in `public/`.
*   **Dark Mode:** Implemented using `next-themes` with a custom `ThemeToggle` component in the header.

## Building and Running

### Development
*   **Start Dev Server:** `npm run dev` (Runs on http://localhost:3000)
*   **Fast Dev (Turbopack):** `npm run dev:fast`
*   **Debug Mode:** `npm run dev:debug`

### Production
*   **Build (Static Export):** `npm run build`
*   **Start Production Server:** `npm start`

### Quality Control
*   **Lint:** `npm run lint`
*   **Format:** `npx prettier --write .`

## Development Conventions
*   **Content Updates:** Always prefer updating `app/data.ts` for text/data changes.
*   **Animations:** Use the `motion/react` library for consistent spring-based animations.
*   **Type Safety:** Adhere to types defined in `app/data.ts` (e.g., `ResearchPaper`, `Project`, `NewsItem`).
*   **External Bio:** The main bio content is fetched from `public/short_bio.html`.
