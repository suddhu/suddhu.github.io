# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, React 19, Tailwind CSS v4, and Motion (animation library). It's a modified version of the Nim template, customized for a robotics researcher at Boston Dynamics showcasing publications, research work, and professional updates.

## Tech Stack

- **Framework**: Next.js 15 (App Router with React Server Components)
- **React**: v19 with strict mode enabled
- **Styling**: Tailwind CSS v4 (PostCSS-based, no config file)
- **Animations**: Motion library (motion/react)
- **Typography**: Google Fonts (Geist, Geist Mono, Press Start 2P)
- **TypeScript**: Strict mode enabled
- **Build**: Static export for GitHub Pages deployment

## Development Commands

```bash
# Start development server on port 3000
npm run dev

# Fast dev with Turbopack
npm run dev:fast

# Dev with debugging enabled
npm run dev:debug

# Dev with verbose logging
npm run dev:verbose

# Production build (static export)
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Format code (Prettier with Tailwind plugin)
npx prettier --write .
```

## Architecture & Key Patterns

### App Structure (Next.js App Router)

- **app/page.tsx**: Main landing page - single-page portfolio with News, Work, and Publications sections
- **app/data.ts**: Central data store for all content (research papers, nav links, etc.)
- **app/layout.tsx**: Root layout with font loading, theme provider, and page structure
- **app/header.tsx**: Site header with animated title
- **app/navigation.tsx**: Top navigation bar
- **app/footer.tsx**: Site footer
- **components/ui/**: Reusable UI components from Motion-Primitives

### Data-Driven Content

All portfolio content is defined in `app/data.ts`:
- `RESEARCH_PAPERS`: Array of research publications with metadata, links, media
- `NAV_LINKS`: Top navigation social/CV links
- Type definitions for Project, WorkExperience, SocialLink, ResearchPaper

When adding new content, always update `app/data.ts` first, then modify the rendering components if needed.

### Component Patterns

1. **Client Components**: Main page.tsx uses 'use client' for animations and interactivity
2. **Motion Animations**: Uses Motion library with variants for stagger animations
3. **Expandable Sections**: Research and News sections have "more/less" toggle functionality
4. **Media Handling**: Supports both images and videos (.mp4, .m4v, .webm, .mov) with click-to-zoom modals
5. **Responsive Design**: Mobile-first with Tailwind responsive classes

### Styling System

- **No Tailwind config file**: Using Tailwind CSS v4 with PostCSS (@tailwindcss/postcss)
- **Custom colors**: Brand background color `#FBFBF8` used throughout
- **Font variables**: CSS custom properties for fonts (--font-geist, --font-press-start-2p)
- **Animations**: Motion library for complex animations, Tailwind for simple transitions
- **Prettier**: Auto-formats with Tailwind class sorting plugin

### Static Export Configuration

The site is configured for static export (`output: 'export'`) with:
- Trailing slashes enabled
- Unoptimized images (for GitHub Pages compatibility)
- No server-side features

### Key Files for Modifications

- **app/data.ts**: Update personal info, research papers, nav links
- **app/page.tsx**: Modify section layout, add/remove sections
- **app/layout.tsx**: Change metadata, fonts, or global layout
- **app/globals.css**: Add global styles or Tailwind customizations
- **components/ui/**: Reusable animated components

## Important Notes

- Research papers support multiple images/videos via `images` array
- Author links are mapped via `authorLinks` object in research papers
- Press coverage is stored as formatted strings: "Title [URL]"
- The site uses Motion library (not Framer Motion) for animations
- TypeScript paths use `@/*` alias for root-level imports
- All animations use spring physics with minimal bounce for smooth feel
