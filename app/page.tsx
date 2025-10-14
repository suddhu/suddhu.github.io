'use client'
import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { XIcon, FileTextIcon, GraduationCapIcon, GithubIcon, LinkedinIcon, TwitterIcon, InfoIcon, ExternalLinkIcon, CodeIcon, DatabaseIcon, VideoIcon, PresentationIcon, ImageIcon, ChevronDownIcon, ChevronUpIcon, NewspaperIcon } from 'lucide-react'

// Reusable Research Paper Component
function ResearchPaper({ paper }: { paper: any }) {
 return (
  <div key={paper.title} className="flex gap-6 items-center">
   <div className="flex-shrink-0 w-53">
    <div>
     {paper.images && paper.images.length > 1 ? (
      <div 
       className="relative rounded-2xl bg-zinc-50/40 p-1 cursor-zoom-in"
       onClick={() => {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50';
        modal.onclick = () => modal.remove();
        
        const container = document.createElement('div');
        container.className = 'max-h-[90vh] max-w-[90vw] rounded-xl overflow-y-auto';
        
        paper.images!.forEach((imageSrc: string, index: number) => {
         const isVideo = imageSrc.endsWith('.mp4') || imageSrc.endsWith('.m4v') || imageSrc.endsWith('.webm') || imageSrc.endsWith('.mov');
         if (isVideo) {
          const video = document.createElement('video');
          video.src = imageSrc;
          video.controls = true;
          video.autoplay = true;
          video.loop = true;
          video.muted = true;
          video.className = 'w-full rounded-xl object-contain mb-2';
          video.onclick = (e) => e.stopPropagation();
          container.appendChild(video);
         } else {
          const img = document.createElement('img');
          img.src = imageSrc;
          img.alt = `${paper.title} - Image ${index + 1}`;
          img.className = 'w-full rounded-xl object-contain mb-2';
          img.onclick = (e) => e.stopPropagation();
          container.appendChild(img);
         }
        });
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70';
        closeBtn.innerHTML = '✕';
        closeBtn.onclick = () => modal.remove();
        
        modal.appendChild(container);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
       }}
      >
       <div className="space-y-1">
        {paper.images.map((imageSrc: string, index: number) => {
         const isVideo = imageSrc.endsWith('.mp4') || imageSrc.endsWith('.m4v') || imageSrc.endsWith('.webm') || imageSrc.endsWith('.mov');
         return isVideo ? (
          <video
           key={index}
           src={imageSrc}
           autoPlay
           loop
           muted
           className="w-full rounded-xl object-cover"
           style={{ border: '0.25px solid #F0F0ED' }}
          />
         ) : (
          <Image
           key={index}
           src={imageSrc}
           alt={`${paper.title} - Image ${index + 1}`}
           width={400}
           height={300}
           className="w-full rounded-xl object-cover"
           style={{ border: '0.25px solid #F0F0ED' }}
           priority={false}
          />
         );
        })}
       </div>
      </div>
     ) : (
      <div 
       className="relative rounded-2xl bg-zinc-50/40 p-1 cursor-zoom-in"
       onClick={() => {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50';
        modal.onclick = () => modal.remove();
        
        const isVideo = paper.image.endsWith('.mp4') || paper.image.endsWith('.m4v') || paper.image.endsWith('.webm') || paper.image.endsWith('.mov');
        if (isVideo) {
         const video = document.createElement('video');
         video.src = paper.image;
         video.controls = true;
         video.autoplay = true;
         video.loop = true;
         video.muted = true;
         video.className = 'max-h-[90vh] max-w-[90vw] rounded-xl object-contain';
         video.onclick = (e) => e.stopPropagation();
         modal.appendChild(video);
        } else {
         const img = document.createElement('img');
         img.src = paper.image;
         img.alt = paper.title;
         img.className = 'max-h-[90vh] max-w-[90vw] rounded-xl object-contain';
         img.onclick = (e) => e.stopPropagation();
         modal.appendChild(img);
        }
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70';
        closeBtn.innerHTML = '✕';
        closeBtn.onclick = () => modal.remove();
        
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
       }}
      >
       {(() => {
        const isVideo = paper.image.endsWith('.mp4') || paper.image.endsWith('.m4v') || paper.image.endsWith('.webm') || paper.image.endsWith('.mov');
        return isVideo ? (
         <video
          src={paper.image}
          autoPlay
          loop
          muted
          className="w-full rounded-xl object-cover"
          style={{ border: '0.25px solid #F0F0ED' }}
         />
        ) : (
         <Image
          src={paper.image}
          alt={paper.title}
          width={400}
          height={300}
          className="w-full rounded-xl object-cover"
          style={{ border: '0.25px solid #F0F0ED' }}
          priority={false}
         />
        );
       })()}
      </div>
     )}
    </div>
   </div>
   <div className="flex-1 min-w-0">
    <h4 className="font-[450] text-lg text-zinc-900">
     {paper.title}
    </h4>
    <p className="text-base text-zinc-500 mt-1 mb-2">
     {paper.authors.split(', ').map((author: string, index: number) => {
      const isLast = index === paper.authors.split(', ').length - 1;
      const authorName = author.replace(', and ', '').replace(' and ', '');
      const hasLink = paper.authorLinks && paper.authorLinks[authorName];
      const isSudharshan = authorName === 'Sudharshan Suresh';
      
      return (
       <span key={authorName}>
        {hasLink ? (
         <a
          href={paper.authorLinks![authorName]}
          target="_blank"
          rel="noopener noreferrer"
          className={`underline decoration-zinc-400 underline-offset-2 ${isSudharshan ? 'font-semibold text-zinc-900' : 'text-black'}`}
         >
          {authorName}
         </a>
        ) : (
         <span className={isSudharshan ? 'font-semibold text-zinc-900' : ''}>
          {authorName}
         </span>
        )}
        {!isLast && ', '}
       </span>
      );
     })}
    </p>
    <div className="text-lg text-zinc-500 flex flex-wrap items-baseline gap-2">
     <span>{paper.venue}, {paper.year}</span>
     {paper.highlights && paper.highlights.length > 0 && (
      <span className="text-sm font-semibold" style={{ color: '#0047FF' }}>
       [{paper.highlights.join(', ')}]
      </span>
     )}
    </div>
    {paper.press && paper.press.length > 0 && (
     <div className="mt-1">
      <span className="text-sm text-black inline-flex items-center gap-1">
       {researchLinkIconFor('press')} {paper.press.map((pressItem: string, index: number) => {
        const match = pressItem.match(/^(.+?) \[(.+?)\]$/);
        if (match) {
         const [, title, url] = match;
         return (
          <span key={index}>
           <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-400 underline-offset-2 "
           >
            {title}
           </a>
           {index < (paper.press?.length || 0) - 1 && <span className="ml-1"></span>}
          </span>
         );
        }
        return (
         <span key={index}>
          {pressItem}
          {index < (paper.press?.length || 0) - 1 && <span className="ml-1"></span>}
         </span>
        );
       })}
      </span>
     </div>
    )}

    <div className="mt-3">
     <AnimatedBackground
      enableHover
      className="h-full w-full rounded-lg bg-zinc-100"
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
     >
      <div className="flex flex-wrap gap-1 p-0">
       {paper.links.paper && (
        <a
         href={paper.links.paper}
         target="_blank"
         rel="noopener noreferrer"
         data-id="paper"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('paper')}
         <span>paper</span>
        </a>
       )}
       {paper.links.website && (
        <a
         href={paper.links.website}
         target="_blank"
         rel="noopener noreferrer"
         data-id="website"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('website')}
         <span>website</span>
        </a>
       )}
       {paper.links.code && (
        <a
         href={paper.links.code}
         target="_blank"
         rel="noopener noreferrer"
         data-id="code"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('code')}
         <span>code</span>
        </a>
       )}
       {paper.links.data && (
        <a
         href={paper.links.data}
         target="_blank"
         rel="noopener noreferrer"
         data-id="data"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('data')}
         <span>data</span>
        </a>
       )}
       {paper.links.twitter && (
        <a
         href={paper.links.twitter}
         target="_blank"
         rel="noopener noreferrer"
         data-id="twitter"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('twitter')}
         <span>twitter</span>
        </a>
       )}
       {paper.links.presentation && (
        <a
         href={paper.links.presentation}
         target="_blank"
         rel="noopener noreferrer"
         data-id="presentation"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('presentation')}
         <span>presentation</span>
        </a>
       )}
       {paper.links.slides && (
        <a
         href={paper.links.slides}
         target="_blank"
         rel="noopener noreferrer"
         data-id="slides"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('slides')}
         <span>slides</span>
        </a>
       )}
       {paper.links.poster && (
        <a
         href={paper.links.poster}
         target="_blank"
         rel="noopener noreferrer"
         data-id="poster"
         className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
        >
         {researchLinkIconFor('poster')}
         <span>poster</span>
        </a>
       )}
      </div>
     </AnimatedBackground>
    </div>
   </div>
  </div>
 );
}
import { Magnetic } from '@/components/ui/magnetic'
import {
 MorphingDialog,
 MorphingDialogTrigger,
 MorphingDialogContent,
 MorphingDialogClose,
 MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
 NAV_LINKS,
 RESEARCH_PAPERS,
} from './data'


// These values are Tailwind CSS utility classes that set the height and width of the icon components responsively.
// "h-3 w-3" sets the height and width to 0.75rem (12px) on all screens.
// "sm:h-3.5 sm:w-3.5" increases the height and width to 0.875rem (14px) on small screens and up.

const linkIconFor = (label: string) => {
 switch (label) {
  case 'CV':
   return <FileTextIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'Scholar':
   return <GraduationCapIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'Github':
   return <GithubIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'LinkedIn':
   return <LinkedinIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'Twitter':
   return <TwitterIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'Short bio':
   return <InfoIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  default:
   return null
 }
}

const researchLinkIconFor = (linkType: string) => {
 switch (linkType) {
  case 'paper':
   return <FileTextIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'website':
   return <ExternalLinkIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'code':
   return <CodeIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'data':
   return <DatabaseIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'twitter':
   return <TwitterIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'presentation':
   return <VideoIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'slides':
   return <PresentationIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'poster':
   return <ImageIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  case 'press':
   return <NewspaperIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
  default:
   return null
 }
}

const VARIANTS_CONTAINER = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: {
   staggerChildren: 0.15,
  },
 },
}

const VARIANTS_SECTION = {
 hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
 visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
 duration: 0.3,
}

type ProjectVideoProps = {
 src: string
}



function ProjectVideo({ src }: ProjectVideoProps) {
 return (
  <MorphingDialog
   transition={{
    type: 'spring',
    bounce: 0,
    duration: 0.3,
   }}
  >
   <MorphingDialogTrigger>
    <video
     src={src}
     autoPlay
     loop
     muted
     className="aspect-video w-full cursor-zoom-in rounded-xl"
    />
   </MorphingDialogTrigger>
   <MorphingDialogContainer>
    <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset ">
     <video
      src={src}
      autoPlay
      loop
      muted
      className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
     />
    </MorphingDialogContent>
    <MorphingDialogClose
     className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
     variants={{
      initial: { opacity: 0 },
      animate: {
       opacity: 1,
       transition: { delay: 0.3, duration: 0.1 },
      },
      exit: { opacity: 0, transition: { duration: 0 } },
     }}
    >
     <XIcon className="h-5 w-5 text-zinc-500" />
    </MorphingDialogClose>
   </MorphingDialogContainer>
  </MorphingDialog>
 )
}

function MagneticSocialLink({
 children,
 link,
}: {
 children: React.ReactNode
 link: string
}) {
 return (
  <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
   <a
    href={link}
    className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
   >
    {children}
    <svg
     width="15"
     height="15"
     viewBox="0 0 15 15"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     className="h-3 w-3"
    >
     <path
      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
     ></path>
    </svg>
   </a>
  </Magnetic>
 )
}

export default function Personal() {
 const [showAllResearch, setShowAllResearch] = useState(false);
 const [showAllUpdates, setShowAllUpdates] = useState(false);
 const [showShortBio, setShowShortBio] = useState(false);
 const [bioContent, setBioContent] = useState('');

 useEffect(() => {
  if (showShortBio && !bioContent) {
   fetch('/short_bio.html')
    .then(response => response.text())
    .then(html => {
     // Extract the content from the <p> tag
     const parser = new DOMParser();
     const doc = parser.parseFromString(html, 'text/html');
     const pElement = doc.querySelector('p');
     if (pElement) {
      setBioContent(pElement.innerHTML);
     }
    })
    .catch(error => {
     console.error('Error loading bio content:', error);
     // Fallback content
     setBioContent('Sudharshan Suresh (he/him) is a research scientist at Boston Dynamics, working on machine learning for the Atlas humanoid robot. He earned a Ph.D. from the Robotics Institute at Carnegie Mellon University, advised by Michael Kaess. He was also a part-time researcher at FAIR, working with the Embodied AI team. His thesis research was on spatial AI from vision and touch for robot manipulation. Prior to this, he completed his Masters in Robotics at CMU, working on underwater SLAM and active exploration. His work in manipulation, perception, and SLAM has been presented at Science Robotics, CoRL, ICRA, IROS, and RA-L. Sudharshan is the recipient of the Hima and Jive Fellowship in Computer Science and the best paper finalist in service robotics at ICRA 2021.');
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


     <div className="flex justify-center">
      <div className="flex flex-nowrap items-center gap-1 p-0 whitespace-nowrap">
       <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100"
        transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
       >
        {NAV_LINKS.map((item) => (
         <a
          key={item.label}
          href={item.label === 'Short bio' ? '#' : item.link}
          onClick={item.label === 'Short bio' ? (e) => { e.preventDefault(); setShowShortBio(true); } : undefined}
          target={item.label === 'Short bio' ? undefined : '_blank'}
          rel={item.label === 'Short bio' ? undefined : 'noopener noreferrer'}
          data-id={item.label}
          className="group relative inline-flex items-center gap-1 rounded-full bg-zinc-100 px-1.5 py-0.5 text-[12px] sm:px-2 sm:py-1 sm:text-[14px] text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50  "
         >
          <span className="inline-flex items-center gap-1">
           {linkIconFor(item.label)}
           {item.label}
          </span>
         </a>
        ))}
       </AnimatedBackground>
      </div>
     </div>

     <div className="text-center">
      <p className="text-sm text-zinc-500 inline-flex items-center">
       <img 
        src="https://bostondynamics.com/wp-content/uploads/2023/06/cropped-Boston-Dynamic_favicon-192x192.jpg" 
        alt="Boston Dynamics Icon" 
        className="h-4 w-4 mr-2"
       />
       <a 
        href="https://bostondynamics.wd1.myworkdayjobs.com/en-US/Boston_Dynamics?q=%27research+scientist+atlas%27&workerSubType=94b44667d8eb01113483ddaebc003906&timeType=2ea36fadc45601e65397a3a4024b5800&locations=94b44667d8eb01465fcf3edabd006468" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline decoration-zinc-400 underline-offset-2 text-[0.9em]"
       >
        we&apos;re hiring, reach out!
       </a>
      </p>
     </div>
    </div>
   </motion.section>

   {/* Atlas Videos Section */}
   <motion.section
    variants={VARIANTS_SECTION}
    transition={TRANSITION_SECTION}
   >
    <div className="flex gap-8 items-start">
     {/* Videos on the left */}
     <div className="flex-shrink-0 w-80">
      <div className="space-y-4">
       <div className="rounded-lg overflow-hidden bg-zinc-100 shadow-lg">
        <video
         src="/media/atlas_1.mp4"
         className="w-full h-auto object-contain"
         autoPlay
         loop
         muted
         playsInline
        />
       </div>
       <div className="rounded-lg overflow-hidden bg-zinc-100 shadow-lg">
        <video
         src="/media/atlas_2.mp4"
         className="w-full h-auto object-contain"
         autoPlay
         loop
         muted
         playsInline
        />
       </div>
      </div>
     </div>
     
     {/* Research description on the right */}
     <div className="flex-1 min-w-0">
      <h3 className="mb-4 text-xl font-medium text-zinc-900" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>Research at Boston Dynamics</h3>
      <div className="space-y-4 text-black leading-relaxed">
       <p>
        I work as a staff research scientist and tech lead on the Atlas humanoid robot project at Boston Dynamics. My research focuses on developing machine learning systems for whole-body manipulation and perception that enable Atlas to perform complex tasks in real-world environments.
       </p>
       <p>
        My work spans computer vision, tactile sensing, and manipulation planning to create robust robotic systems that can operate autonomously in unstructured environments. This includes developing neural networks for object recognition, pose estimation, and manipulation strategies that allow Atlas to interact with objects and navigate complex scenarios.
       </p>
       <p>
        The videos showcase some of our recent advances in autonomous manipulation, where Atlas can now perform complex tasks like automotive parts picking with minimal human intervention. This represents significant progress in making humanoid robots practical for real-world applications.
       </p>
      </div>
     </div>
    </div>
   </motion.section>

   <motion.section
    id="news"
    variants={VARIANTS_SECTION}
    transition={TRANSITION_SECTION}
   >
            <h3 className="mb-5 text-2xl font-medium text-zinc-900" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>News</h3>
    <div className="space-y-2">
     <div className="grid grid-cols-1 gap-2">
      <div className="flex gap-4">
       <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
        2025/06
       </div>
       <div className="flex-1 text-black ">
        I did a deep-dive into our whole-body manipulation and vision stack at the{' '}
        <a href="https://dex-manipulation.github.io/rss2025/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         RSS Dexterous Manipulation Workshop
        </a>
        , link to the invited talk{' '}
        <a href="https://youtu.be/7a5HYjQ4wJo?si=E3kdseb2sUG0MvXL&t=2442" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         here
        </a>.
       </div>
      </div>
      
      <div className="flex gap-4">
       <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
        2025/05
       </div>
       <div className="flex-1 text-black ">
        I&apos;m a featured interview in our team&apos;s{' '}
        <a href="https://youtu.be/oe1dke3Cf7I?si=h1efM6LhXF8iPMxO" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         video release
        </a>{' '}
        and a contributing author to the accompanying{' '}
        <a href="https://bostondynamics.com/blog/making-atlas-see-the-world/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         blogpost
        </a>
       </div>
      </div>
      
      <div className="flex gap-4">
       <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
        2025/05
       </div>
       <div className="flex-1 text-black ">
        Selected to be part of the{' '}
        <a href="https://sites.google.com/view/rsspioneers2025/participants?authuser=0" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         RSS Pioneers Workshop
        </a>
        , one of 33 PhD and early-career industry researchers.
       </div>
      </div>
      
      {/* Year divider */}
      <div className="flex items-center gap-4 py-2">
       <div className="flex-shrink-0 w-24 text-base text-zinc-500 font-medium">
        2024 ↓
       </div>
       <div className="flex-1 border-t border-zinc-300 "></div>
      </div>
      
      <div className="flex gap-4">
       <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
        2024/11
       </div>
       <div className="flex-1 text-black ">
        NeuralFeels is{' '}
        <a href="https://www.science.org/stoken/author-tokens/ST-2331/full" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         published in Science Robotics
        </a>{' '}
        and featured as{' '}
        <a href="https://www.science.org/toc/scirobotics/9/96" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         cover of November issue
        </a>{' '}
        (<a href="https://www.ri.cmu.edu/cmu-and-partners-redefine-robotic-perception-with-neuralfeels/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
         spotlight article
        </a>).
       </div>
      </div>
     </div>
     
     {/* Fade out effect and expand button */}
     {!showAllUpdates && (
      <div className="relative">
       {/* Preview of first hidden update */}
       <div className="pointer-events-none" style={{ opacity: 0.8 }}>
        <div className="flex gap-4">
         <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
          2024/10
         </div>
         <div className="flex-1 text-black ">
          My work on Atlas was{' '}
          <a href="https://youtu.be/F_7IPm7f1vI?si=woSN8Jax0F6XK_P3" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
           featured in their autonomous demo
          </a>{' '}
          (<a href="https://spectrum.ieee.org/boston-dynamics-new-atlas" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
           IEEE
          </a>
          ,{' '}
          <a href="https://techcrunch.com/2024/10/30/boston-dynamics-electric-atlas-humanoid-executes-autonomous-automotive-parts-picking/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
           TechCrunch
          </a>
          ,{' '}
          <a href="https://www.theverge.com/2024/10/30/24283592/boston-dynamics-atlas-robot-autonomous" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
           Verge
          </a>).
         </div>
        </div>
       </div>
       
       {/* Fade out gradient overlay */}
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FBFBF8] via-[#FBFBF8] to-transparent pointer-events-none" style={{ height: '80px' }}></div>
       
       <div className="flex justify-center mt-4">
        <motion.button
         onClick={() => setShowAllUpdates(true)}
         className="group relative inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs text-black transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700"
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

   {/* Expanded updates section */}
   {showAllUpdates && (
    <motion.section
     variants={VARIANTS_SECTION}
     transition={TRANSITION_SECTION}
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
    >
     <div className="space-y-2">
      <div className="grid grid-cols-1 gap-2">
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2024/10
        </div>
        <div className="flex-1 text-black ">
         My work on Atlas was{' '}
         <a href="https://youtu.be/F_7IPm7f1vI?si=woSN8Jax0F6XK_P3" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          featured in their autonomous demo
         </a>{' '}
         (<a href="https://spectrum.ieee.org/boston-dynamics-new-atlas" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          IEEE
         </a>
         ,{' '}
         <a href="https://techcrunch.com/2024/10/30/boston-dynamics-electric-atlas-humanoid-executes-autonomous-automotive-parts-picking/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          TechCrunch
         </a>
         ,{' '}
         <a href="https://www.theverge.com/2024/10/30/24283592/boston-dynamics-atlas-robot-autonomous" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          Verge
         </a>).
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2024/03
        </div>
        <div className="flex-1 text-black ">
         I&apos;ve moved to Greater Boston, to work with the Atlas team at Boston Dynamics{' '}
         (<a href="https://www.youtube.com/watch?v=29ECwExc-_M" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          hello
         </a>).
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2024/02
        </div>
        <div className="flex-1 text-black ">
         I&apos;ve defended my Ph.D., here&apos;s my{' '}
         <a href="https://www.youtube.com/watch?v=9v-bmXGAxVc" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          talk
         </a>{' '}
         and{' '}
         <a href="https://kilthub.cmu.edu/articles/thesis/Perception_amidst_interaction_spatial_AI_with_vision_and_touch_for_robot_manipulation/25316152?file=44750527" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          thesis
         </a>!
        </div>
       </div>
       
       {/* Year divider */}
       <div className="flex items-center gap-4 py-2">
        <div className="flex-shrink-0 w-24 text-base text-zinc-500 font-medium">
         2023 ↓
        </div>
        <div className="flex-1 border-t border-zinc-300 "></div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2023/12
        </div>
        <div className="flex-1 text-black ">
         The pre-print for NeuralFeels is out, read it{' '}
         <a href="https://arxiv.org/abs/2312.13469" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          here
         </a>.
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2023/08
        </div>
        <div className="flex-1 text-black ">
         Our work{' '}
         <a href="https://haozhi.io/rotateit/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          RotateIt
         </a>
         , led by{' '}
         <a href="https://haozhi.io/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          Haozhi
         </a>
         , was accepted to{' '}
         <a href="https://www.corl2023.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          CoRL 2023
         </a>.
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2023/04
        </div>
        <div className="flex-1 text-black ">
         Spending the summer as a research scientist intern at{' '}
         <a href="https://ai.facebook.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          FAIR
         </a>{' '}
         Menlo Park on visuo-tactile manipulation!
        </div>
       </div>
       
       {/* Year divider */}
       <div className="flex items-center gap-4 py-2">
        <div className="flex-shrink-0 w-24 text-base text-zinc-500 font-medium">
         2022 ↓
        </div>
        <div className="flex-1 border-t border-zinc-300 "></div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/12
        </div>
        <div className="flex-1 text-black ">
         <a href="https://suddhu.github.io/midastouch-tactile/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          MidasTouch
         </a>{' '}
         was showcased at{' '}
         <a href="https://corl2022.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          CoRL 2022
         </a>{' '}
         with a{' '}
         <a href="data/media/midastouch/midastouch_demo.jpg" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          live demo
         </a>.
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/10
        </div>
        <div className="flex-1 text-black ">
         Successfully passed my{' '}
         <a href="https://www.ri.cmu.edu/event/tactile-slam-perception-for-dexterity-via-vision-based-touch/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          Ph.D. thesis proposal
         </a>!
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/09
        </div>
        <div className="flex-1 text-black ">
         <a href="https://suddhu.github.io/midastouch-tactile/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          MidasTouch
         </a>{' '}
         was accepted to{' '}
         <a href="https://corl2022.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          CoRL 2022
         </a>{' '}
         as an oral.
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/08
        </div>
        <div className="flex-1 text-black ">
         We&apos;ve extended{' '}
         <a href="https://joeaortiz.github.io/iSDF/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          iSDF
         </a>{' '}
         for neural mapping with the Franka robot, code{' '}
         <a href="https://github.com/facebookresearch/iSDF#3-running-isdf-with-a-franka-and-live-camera-in-ros" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          here
         </a>.
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/05
        </div>
        <div className="flex-1 text-black ">
         Organized the{' '}
         <a href="https://www.roboticsdebates.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          Debates on the Future of Robotics Research workshop
         </a>{' '}
         at ICRA &apos;22
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/04
        </div>
        <div className="flex-1 text-black ">
         Spending the summer at{' '}
         <a href="https://ai.facebook.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          FAIR
         </a>{' '}
         Pittsburgh working on pose tracking from touch
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2022/01
        </div>
        <div className="flex-1 text-black ">
         <a href="https://arxiv.org/abs/2109.09884" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          ShapeMap 3-D
         </a>{' '}
         was accepted to ICRA 2022, with an open-source{' '}
         <a href="https://github.com/rpl-cmu/shape-map-3D" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          implementation
         </a>.
        </div>
       </div>
       
       {/* Year divider */}
       <div className="flex items-center gap-4 py-2">
        <div className="flex-shrink-0 w-24 text-base text-zinc-500 font-medium">
         2021 ↓
        </div>
        <div className="flex-1 border-t border-zinc-300 "></div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2021/08
        </div>
        <div className="flex-1 text-black ">
         Presented at the Tartan SLAM series on our working on perception for planar pushing, video{' '}
         <a href="https://www.youtube.com/watch?v=IjuTxa8andk" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          here
         </a>.
        </div>
       </div>
       
       <div className="flex gap-4">
        <div className="flex-shrink-0 w-24 text-base text-zinc-900 font-medium">
         2021/05
        </div>
        <div className="flex-1 text-black ">
         <a href="https://suddhu.github.io/tactile-slam/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-400 underline-offset-2 ">
          Tactile SLAM
         </a>{' '}
         was the ICRA 2021 best paper in service robotics finalist!
        </div>
       </div>
      </div>
     </div>
     
     {/* Less button for expanded updates */}
     <div className="flex justify-center mt-6">
      <motion.button
       onClick={() => setShowAllUpdates(false)}
       className="group relative inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs text-black transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700"
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

   <motion.section
    id="research"
    variants={VARIANTS_SECTION}
    transition={TRANSITION_SECTION}
   >
            <h3 className="mb-5 text-2xl font-medium text-zinc-900" style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}>Research</h3>
        <div className="flex flex-col space-y-8">
     {RESEARCH_PAPERS.slice(0, 5).map((paper) => (
      <ResearchPaper key={paper.title} paper={paper} />
     ))}
     
     {/* Fade out effect and expand button */}
     {!showAllResearch && (
      <div className="relative">
       {/* Preview of first hidden project */}
       <div className="pointer-events-none" style={{ opacity: 0.8 }}>
        {RESEARCH_PAPERS.slice(5, 6).map((paper) => (
         <div key={paper.title} className="flex gap-6">
          <div className="flex-shrink-0 w-53">
           <div className="relative rounded-2xl bg-zinc-50/40 p-1">
            <Image
             src={paper.image}
             alt={paper.title}
             width={400}
             height={300}
             className="w-full rounded-xl object-cover"
             style={{ border: '0.25px solid #F0F0ED' }}
             priority={false}
            />
           </div>
          </div>
          <div className="flex-1 min-w-0">
           <h4 className="font-base font-[450] text-zinc-900 ">
            {paper.title}
           </h4>
           <p className="text-base text-zinc-500 mt-1">
            {paper.authors.split(', ').slice(0, 3).join(', ')}...
           </p>
           <p className="text-base text-zinc-500 ">
            {paper.venue}, {paper.year}
           </p>
          </div>
         </div>
        ))}
       </div>
       
              {/* Fade out gradient overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FBFBF8] to-[#FBFBF8] pointer-events-none"></div>
       
       <div className="flex justify-center">
        <motion.button
         onClick={() => setShowAllResearch(true)}
         className="group relative inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs text-black transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700"
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
       className="group relative inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs text-black transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700"
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


   {/* Bio Section Anchor */}
   <div id="bio" className="sr-only"></div>
   
   {/* Short Bio Modal */}
   {showShortBio && (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
     onClick={() => setShowShortBio(false)}
    >
     <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
       type: 'spring',
       bounce: 0,
       duration: 0.3,
      }}
                  className="relative max-w-2xl rounded-2xl p-6 ring-1 ring-zinc-200/50 ring-inset m-4"
            style={{ backgroundColor: '#FBFBF8' }}
      onClick={(e) => e.stopPropagation()}
     >
      <div className="space-y-4">
       <div className="flex items-center justify-between">
        <h3 className="press-start-2p-large text-zinc-900">Bio</h3>
        <motion.button
         onClick={() => setShowShortBio(false)}
         className="h-fit w-fit rounded-full bg-white p-1 hover:bg-zinc-100 transition-colors"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
        >
         <XIcon className="h-5 w-5 text-zinc-500" />
        </motion.button>
       </div>
       <div 
        className="text-black leading-relaxed"
        dangerouslySetInnerHTML={{ __html: bioContent || '<p>Loading...</p>' }}
       />
      </div>
     </motion.div>
    </motion.div>
   )}

  </motion.main>
 )
}
