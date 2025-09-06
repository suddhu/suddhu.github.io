'use client'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'news', 'research', 'etc']
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
    return `transition-colors duration-200 border px-2 py-1 ${
      isActive 
        ? 'text-zinc-900 border-zinc-300 bg-zinc-100' 
        : 'text-zinc-600 border-transparent hover:text-zinc-900 hover:border-zinc-300'
    }`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm py-4" style={{ backgroundColor: 'rgba(251, 251, 248, 0.9)' }}>
      <div className="mx-auto w-full max-w-screen-md px-4">
                <div className="flex items-center gap-1 text-xs tracking-tight" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>
          <button 
            onClick={() => scrollToSection('home')}
            className={getLinkClass('home')}
          >
            About
          </button>
          <span className="text-zinc-400">/</span>
          <button 
            onClick={() => scrollToSection('news')}
            className={getLinkClass('news')}
          >
            News
          </button>
          <span className="text-zinc-400">/</span>
          <button 
            onClick={() => scrollToSection('research')}
            className={getLinkClass('research')}
          >
            Research
          </button>
          <span className="text-zinc-400">/</span>
          <button 
            onClick={() => scrollToSection('etc')}
            className={getLinkClass('etc')}
          >
            etc
          </button>
        </div>
      </div>
    </nav>
  )
}
