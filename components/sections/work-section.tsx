'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'

export function WorkSection() {
 const [playingVideo1, setPlayingVideo1] = useState(false);
 const [playingVideo2, setPlayingVideo2] = useState(false);

 return (
  <motion.section
   id="recent-work"
   variants={VARIANTS_SECTION}
   transition={TRANSITION_SECTION}
  >
   <h3 className="mb-5 text-2xl font-medium text-zinc-900 dark:text-zinc-100" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>Work</h3>
   <div className="space-y-6">
    {/* Media items */}
    <div className="flex flex-col sm:flex-row gap-4 items-stretch">
     {/* Video 1 */}
     <div className="flex-1 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-lg relative">
      {playingVideo1 ? (
       <iframe
        src="https://www.youtube.com/embed/oe1dke3Cf7I?autoplay=1&modestbranding=1&rel=0"
        className="w-full aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Boston Dynamics Atlas Video Release"
       />
      ) : (
       <>
        <img
         src="https://img.youtube.com/vi/oe1dke3Cf7I/maxresdefault.jpg"
         alt="Boston Dynamics Atlas Video Release"
         className="w-full aspect-video object-cover"
        />
        <button
         onClick={() => setPlayingVideo1(true)}
         className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors group"
         aria-label="Play Boston Dynamics Atlas Video Release"
        >
         <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center group-hover:bg-red-600 transition-colors">
          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M8 5v14l11-7z"/>
          </svg>
         </div>
        </button>
       </>
      )}
     </div>

     {/* Video 2 */}
     <div className="flex-1 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-lg relative">
      {playingVideo2 ? (
       <iframe
        src="https://www.youtube.com/embed/7a5HYjQ4wJo?start=2442&autoplay=1&modestbranding=1&rel=0"
        className="w-full aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="RSS Dexterous Manipulation Workshop Talk"
       />
      ) : (
       <>
        <img
         src="/media/rss_talk.png"
         alt="RSS Dexterous Manipulation Workshop Talk - Making Atlas See the World"
         className="w-full aspect-video object-cover"
        />
        <button
         onClick={() => setPlayingVideo2(true)}
         className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors group"
         aria-label="Play RSS Dexterous Manipulation Workshop Talk"
        >
         <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center group-hover:bg-red-600 transition-colors">
          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
           <path d="M8 5v14l11-7z"/>
          </svg>
         </div>
        </button>
       </>
      )}
     </div>

     {/* Image */}
     <div className="flex-1 rounded-lg overflow-hidden bg-transparent shadow-lg">
      <img
       src="/media/atlas_data.png"
       alt="Atlas Data Visualization"
       className="w-full aspect-video object-contain"
      />
     </div>
    </div>
    
    {/* Research description below */}
    <div className="text-lg text-black dark:text-zinc-300 leading-tight text-justify">
     <p>
      <span className="font-bold">I&apos;m a research scientist</span> and <span className="font-bold">technical lead</span> on the Atlas VLA team. I currently focus on scaling humanoid policies through alternative data sources like egocentric human data (more details soon). My work is often split between ML training, robot deployment, and coordinating data collection efforts. Previously, I was responsible for vision and wholebody manipulation that powered the Atlas sequencing demos.
     </p>
    </div>
   </div>
  </motion.section>
 );
}
