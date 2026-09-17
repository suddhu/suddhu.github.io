'use client'
import React, { useEffect } from 'react'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'

export interface VideoModalVideo {
  src: string
  title: string
}

interface VideoModalProps {
  video: VideoModalVideo | null
  onClose: () => void
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!video) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [video, onClose])

  if (!video) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        className="m-4 w-[min(92vw,960px)] rounded-2xl bg-[#FBFBF8] p-3 ring-1 ring-zinc-200/50 ring-inset sm:p-4 dark:bg-zinc-950 dark:ring-zinc-800/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="press-start-2p truncate text-zinc-900 dark:text-zinc-100">
            {video.title}
          </h3>
          <motion.button
            onClick={onClose}
            aria-label="Close video"
            className="h-fit w-fit flex-shrink-0 rounded-full bg-white p-1 transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <XIcon className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
          </motion.button>
        </div>
        <iframe
          src={video.src}
          className="aspect-video w-full rounded-lg bg-black"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          title={video.title}
        />
      </motion.div>
    </motion.div>
  )
}
