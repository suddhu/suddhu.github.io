'use client'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 dark:border-zinc-800 px-0 py-4">
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
        <a href="https://github.com/ibelick/nim" target="_blank" rel="noopener noreferrer">
          <span className="text-base text-zinc-500 dark:text-zinc-400">© 2025 Sudharshan Suresh.</span>
        </a>
        <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
        <span className="text-sm italic text-zinc-400 dark:text-zinc-500">An exercise in vibe-coding</span>
      </div>
    </footer>
  )
}
