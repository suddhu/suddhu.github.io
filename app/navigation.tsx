'use client'
import { useState, useEffect } from 'react'

import { ThemeToggle } from '@/components/theme-toggle'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'news', 'recent-work', 'research']
      const scrollPosition = window.scrollY + 150 // Increased offset for fixed nav

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed navigation height
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const getLinkClass = (section: string) => {
    const isActive = activeSection === section
    return `transition-colors duration-200 border px-1.5 py-1 sm:px-2 ${
      isActive 
        ? 'text-zinc-900 border-zinc-300 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:border-zinc-700' 
        : 'text-black dark:text-zinc-400 border-transparent hover:text-zinc-900 hover:border-zinc-300 dark:hover:text-zinc-200 dark:hover:border-zinc-600'
    }`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm py-4 bg-white/90 dark:bg-zinc-950/90 transition-colors duration-300">
      <div className="mx-auto w-full max-w-screen-md px-4 flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs tracking-tight" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
          <button 
            onClick={() => scrollToSection('home')}
            className={getLinkClass('home')}
          >
            About
          </button>
          <span className="text-zinc-400 select-none">/</span>
          <button 
            onClick={() => scrollToSection('news')}
            className={getLinkClass('news')}
          >
            News
          </button>
          <span className="text-zinc-400 select-none">/</span>
          <button 
            onClick={() => scrollToSection('recent-work')}
            className={getLinkClass('recent-work')}
          >
            Work
          </button>
          <span className="text-zinc-400 select-none">/</span>
          <button 
            onClick={() => scrollToSection('research')}
            className={getLinkClass('research')}
          >
            Publications
          </button>
        </div>
        <div className="flex-shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
