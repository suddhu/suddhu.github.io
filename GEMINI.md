# Gemini Context File

## Project Overview
This project is a **personal portfolio website** for Sudharshan Suresh, a robotics researcher. It is based on the [Nim](https://github.com/ibelick/nim) template and utilizes a modern React stack to showcase publications, research work, and professional updates. The site is designed as a minimal, single-page application with rich animations.

## Tech Stack
*   **Framework:** Next.js 15 (App Router, React Server Components)
*   **Core:** React 19
*   **Styling:** Tailwind CSS v4 (PostCSS-based, zero-config)
*   **Icons:** Lucide React
*   **Animation:** Motion (motion/react), Motion-Primitives
*   **Typography:** Google Fonts (Geist, Geist Mono, Press Start 2P), custom 'Garamond Premier Pro'
*   **Language:** TypeScript (Strict mode)
*   **Deployment:** Static export (`output: 'export'`) optimized for GitHub Pages or Vercel.

## Architecture & Key Patterns
*   **Data-Driven:** All content (bio, research papers, social links) is centralized in `app/data.ts`. This is the primary file for content updates.
*   **App Router:** Uses the Next.js App Router structure:
    *   `app/page.tsx`: Main landing page combining News, Work, and Publications. Contains inline components like `ResearchPaper` and `ProjectVideo`.
    *   `app/layout.tsx`: Root layout, fonts, and theme.
    *   `app/header.tsx` & `app/footer.tsx`: Global navigation and footer.
*   **Components:** Reusable UI components are located in `components/ui/`, heavily leveraging `motion/react` for interactivity.
*   **Media:** Supports diverse media types (images, MP4, WEBM, GIFs) with specific handling for research paper visualizations.
*   **Styling:** Tailwind CSS v4 (PostCSS-based, zero-config). Customizations are handled in `app/globals.css` (custom fonts, variables).
*   **Dark Mode:** Implemented using `next-themes`. A toggle button is available in the top navigation bar.

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
*   **Content Updates:** Prefer updating `app/data.ts` for text/data changes rather than hardcoding into components.
*   **Formatting:** The project uses Prettier with the `prettier-plugin-tailwindcss` for class sorting.
*   **Animations:** Animations use spring physics. Use the `Motion` library components and variants for consistent behavior.
*   **Type Safety:** Strict TypeScript usage is enforced. Ensure types in `app/data.ts` (e.g., `ResearchPaper`, `Project`) are respected.
*   **External Content:** The bio is fetched from `/public/short_bio.html`.