'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'

export function WorkSection() {
  const [playingVideo1, setPlayingVideo1] = useState(false)
  const [playingVideo2, setPlayingVideo2] = useState(false)

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
            {playingVideo1 ? (
              <iframe
                src="https://www.youtube.com/embed/oe1dke3Cf7I?autoplay=1&modestbranding=1&rel=0"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Boston Dynamics Atlas Video Release"
              />
            ) : (
              <>
                <img
                  src="https://img.youtube.com/vi/oe1dke3Cf7I/maxresdefault.jpg"
                  alt="Boston Dynamics Atlas Video Release"
                  className="aspect-video w-full object-cover"
                />
                <button
                  onClick={() => setPlayingVideo1(true)}
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
              </>
            )}
          </div>

          {/* Video 2 */}
          <div className="relative flex-1 overflow-hidden rounded-lg bg-zinc-100 shadow-lg dark:bg-zinc-800">
            {playingVideo2 ? (
              <iframe
                src="https://www.youtube.com/embed/7a5HYjQ4wJo?start=2442&autoplay=1&modestbranding=1&rel=0"
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="RSS Dexterous Manipulation Workshop Talk"
              />
            ) : (
              <>
                <img
                  src="/media/rss_talk.png"
                  alt="RSS Dexterous Manipulation Workshop Talk - Making Atlas See the World"
                  className="aspect-video w-full object-cover"
                />
                <button
                  onClick={() => setPlayingVideo2(true)}
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
              </>
            )}
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
            I focus on training humanoid policies at scale with egocentric human
            data. My work is split between ML training, robot deployment, and
            coordinating data collection efforts. Previously, as a staff RS, I
            was responsible for whole-body manipulation and vision foundation
            models for Atlas.
          </p>{' '}
        </div>
      </div>
    </motion.section>
  )
}
