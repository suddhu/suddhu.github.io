'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'
import { VideoModal, type VideoModalVideo } from './video-modal'

export function WorkSection() {
  const [activeVideo, setActiveVideo] = useState<VideoModalVideo | null>(null)

  return (
    <motion.section
      id="recent-work"
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
    >
      <h3
        className="mb-5 text-2xl font-medium text-zinc-900 dark:text-zinc-100"
        style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
      >
        Work
      </h3>
      <div className="space-y-6">
        {/* Media items */}
        <div className="flex flex-col items-stretch gap-4 sm:flex-row">
          {/* Video 1 */}
          <div className="relative flex-1 overflow-hidden rounded-lg bg-zinc-100 shadow-lg dark:bg-zinc-800">
            <img
              src="https://img.youtube.com/vi/oe1dke3Cf7I/maxresdefault.jpg"
              alt="Boston Dynamics Atlas Video Release"
              className="aspect-video w-full object-cover"
            />
            <button
              onClick={() =>
                setActiveVideo({
                  src: 'https://www.youtube.com/embed/oe1dke3Cf7I?autoplay=1&modestbranding=1&rel=0',
                  title: 'Boston Dynamics Atlas Video Release',
                })
              }
              className="group absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/10"
              aria-label="Play Boston Dynamics Atlas Video Release"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 transition-colors group-hover:bg-red-600">
                <svg
                  className="ml-0.5 h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Video 2 */}
          <div className="relative flex-1 overflow-hidden rounded-lg bg-zinc-100 shadow-lg dark:bg-zinc-800">
            <img
              src="/media/rss_talk.png"
              alt="RSS Dexterous Manipulation Workshop Talk - Making Atlas See the World"
              className="aspect-video w-full object-cover"
            />
            <button
              onClick={() =>
                setActiveVideo({
                  src: 'https://www.youtube.com/embed/7a5HYjQ4wJo?start=2442&autoplay=1&modestbranding=1&rel=0',
                  title: 'RSS Dexterous Manipulation Workshop Talk',
                })
              }
              className="group absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/10"
              aria-label="Play RSS Dexterous Manipulation Workshop Talk"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/90 transition-colors group-hover:bg-red-600">
                <svg
                  className="ml-0.5 h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 overflow-hidden rounded-lg bg-transparent shadow-lg">
            <img
              src="/media/atlas_data.png"
              alt="Atlas Data Visualization"
              className="aspect-video w-full object-contain"
            />
          </div>
        </div>

        {/* Research description below */}
        <div className="text-lg text-black dark:text-zinc-300">
          <p>
            I focus on training humanoid policies at scale with human data. My
            work is split between ML training, data collection efforts, and
            robot deployment. Previously, I was responsible for whole-body
            manipulation on the e-Atlas research platform.
          </p>{' '}
        </div>
      </div>
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </motion.section>
  )
}
