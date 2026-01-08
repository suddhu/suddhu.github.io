'use client'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { VARIANTS_CONTAINER, VARIANTS_SECTION, TRANSITION_SECTION } from '@/lib/constants'
import { NewsSection } from '@/components/sections/news-section'
import { WorkSection } from '@/components/sections/work-section'
import { ResearchSection } from '@/components/sections/research-section'
import { BioModal } from '@/components/sections/bio-modal'
import { NavPills } from '@/components/sections/nav-pills'

export default function Personal() {
 const [showShortBio, setShowShortBio] = useState(false);
 const [bioContent, setBioContent] = useState('');

 useEffect(() => {
  if (showShortBio && !bioContent) {
   fetch('/short_bio.html')
    .then(response => response.text())
    .then(html => {
     const parser = new DOMParser();
     const doc = parser.parseFromString(html, 'text/html');
     const pElement = doc.querySelector('p');
     if (pElement) {
      setBioContent(pElement.innerHTML);
     }
    })
    .catch(error => {
     console.error('Error loading bio content:', error);
     setBioContent('Sudharshan Suresh (he/him) is a research scientist at Boston Dynamics, working on machine learning for the Atlas humanoid robot...');
    });
  }
 }, [showShortBio, bioContent]);

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

   <div id="bio" className="sr-only"></div>
   
   <BioModal 
    isOpen={showShortBio} 
    onClose={() => setShowShortBio(false)} 
    bioContent={bioContent} 
   />
  </motion.main>
 )
}