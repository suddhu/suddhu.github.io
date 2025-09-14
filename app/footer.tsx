'use client'
import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4">
      <div className="flex items-center justify-between">
        <a href="https://github.com/ibelick/nim" target="_blank" rel="noopener noreferrer">
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2025 Sudharshan Suresh.</span>
          </TextLoop>
        </a>
      </div>
    </footer>
  )
}
