'use client'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { VARIANTS_CONTAINER, VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'
import { NewsSection } from '@/components/sections/news-section'
import { WorkSection } from '@/components/sections/work-section'
import { ResearchSection } from '@/components/sections/research-section'
import { BioModal } from '@/components/sections/bio-modal'
import { NavPills } from '@/components/sections/nav-pills'
import { BIO } from '@/app/data'

export default function Personal() {
 const [showShortBio, setShowShortBio] = useState(false);

 return (
  <motion.main
   className="space-y-6"
   variants={VARIANTS_CONTAINER}
   initial="hidden"
   animate="visible"
  >
   <motion.section
    variants={VARIANTS_SECTION}
    transition={TRANSITION_SECTION}
   >
    <div className="space-y-4">
     <NavPills onShowBio={() => setShowShortBio(true)} />
    </div>
   </motion.section>

   <NewsSection />

   <WorkSection />

   <ResearchSection />

   <BioModal
    isOpen={showShortBio}
    onClose={() => setShowShortBio(false)}
    bioContent={BIO}
   />
  </motion.main>
 )
}