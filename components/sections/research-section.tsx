'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'
import { RESEARCH_PAPERS } from '@/app/data'
import { ResearchPaper } from './research-paper'

export function ResearchSection() {
 const [showAllResearch, setShowAllResearch] = useState(false);

 return (
  <>
   <motion.section
    id="research"
    variants={VARIANTS_SECTION}
    transition={TRANSITION_SECTION}
   >
    <h3 className="mb-5 text-2xl font-medium text-zinc-900 dark:text-zinc-100" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>Publications</h3>
    <div className="flex flex-col space-y-8">
     {RESEARCH_PAPERS.slice(0, 5).map((paper, index) => (
      <ResearchPaper key={paper.title} paper={paper} priority={index < 2} />
     ))}
     
     {/* Fade out effect and expand button */}
     {!showAllResearch && (
      <div className="relative">
       {/* Preview of first hidden project */}
       <div className="pointer-events-none" style={{ opacity: 0.8 }}>
        {RESEARCH_PAPERS.slice(5, 6).map((paper) => (
         <div key={paper.title} className="flex gap-6">
          <div className="flex-shrink-0 w-53">
           <div className="relative rounded-2xl bg-zinc-50/40 dark:bg-zinc-800/40 p-1">
            <Image
             src={paper.image}
             alt={paper.title}
             width={400}
             height={300}
             className="w-full rounded-xl object-cover border-[0.25px] border-[#F0F0ED] dark:border-zinc-800"
             priority={false}
            />
           </div>
          </div>
          <div className="flex-1 min-w-0">
           <h4 className="text-lg font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
            {paper.title}
           </h4>
           <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-1">
            {paper.authors.split(', ').slice(0, 3).join(', ')}...
           </p>
           <p className="text-lg font-[450] text-zinc-900 dark:text-zinc-100">
            {paper.venue}, {paper.year}
           </p>
          </div>
         </div>
        ))}
       </div>
       
       {/* Fade out gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FBFBF8] via-[#FBFBF8] dark:via-zinc-950 dark:to-zinc-950 to-[#FBFBF8] pointer-events-none"></div>
       
       <div className="flex justify-center">
        <motion.button
         onClick={() => setShowAllResearch(true)}
         className="group relative inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-4 py-2 text-xs text-black dark:text-zinc-200 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-100"
         style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
         whileHover={{ scale: 1.02 }}
         whileTap={{ scale: 0.98 }}
        >
         <span>[more]</span>
         <ChevronDownIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-y-0.5" />
        </motion.button>
       </div>
      </div>
     )}
    </div>
   </motion.section>

   {/* Expanded research section */}
   {showAllResearch && (
    <motion.section
     variants={VARIANTS_SECTION}
     transition={TRANSITION_SECTION}
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
    >
     <div className="flex flex-col space-y-8">
      {RESEARCH_PAPERS.slice(5).map((paper) => (
       <ResearchPaper key={paper.title} paper={paper} />
      ))}
     </div>
     
     {/* Less button for expanded research */}
     <div className="flex justify-center mt-6">
      <motion.button
       onClick={() => setShowAllResearch(false)}
       className="group relative inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-4 py-2 text-xs text-black dark:text-zinc-200 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-100"
       style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
       whileHover={{ scale: 1.02 }}
       whileTap={{ scale: 0.98 }}
      >
       <span>[less]</span>
       <ChevronUpIcon className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
      </motion.button>
     </div>
    </motion.section>
   )}
  </>
 );
}
