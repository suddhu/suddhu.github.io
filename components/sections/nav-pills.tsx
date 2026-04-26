'use client'
import React from 'react'
import Image from 'next/image'
import { FileTextIcon, GraduationCapIcon, GithubIcon, LinkedinIcon, TwitterIcon, InfoIcon } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { NAV_LINKS } from '@/app/data'

const linkIconFor = (label: string) => {
 switch (label) {
  case 'CV':
   return <FileTextIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  case 'Scholar':
   return <GraduationCapIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  case 'Github':
   return <GithubIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  case 'LinkedIn':
   return <LinkedinIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  case 'Twitter':
   return <TwitterIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  case 'Short bio':
   return <InfoIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
  default:
   return null
 }
}

interface NavPillsProps {
 onShowBio: () => void
}

export function NavPills({ onShowBio }: NavPillsProps) {
 return (
  <div className="flex justify-center">
   <div className="flex flex-wrap items-center justify-center gap-1 p-0">
    <AnimatedBackground
     enableHover
     className="h-full w-full rounded-lg bg-zinc-300 dark:bg-zinc-700"
     transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
    >
     {NAV_LINKS.map((item) => (
      <a
       key={item.label}
       href={item.label === 'Short bio' ? '#' : item.link}
       onClick={item.label === 'Short bio' ? (e) => { e.preventDefault(); onShowBio(); } : undefined}
       target={item.label === 'Short bio' ? undefined : '_blank'}
       rel={item.label === 'Short bio' ? undefined : 'noopener noreferrer'}
       aria-label={item.label}
       data-id={item.label}
       className="group relative inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[13px] sm:px-2 sm:py-1 sm:text-[16px] text-black dark:text-zinc-200 transition-colors duration-200"
      >
       <span className="inline-flex items-center gap-1">
        {linkIconFor(item.label)}
        {item.label}
       </span>
      </a>
     ))}
     <a 
      href="https://bostondynamics.wd1.myworkdayjobs.com/en-US/Boston_Dynamics?q=%27research+scientist+atlas%27&workerSubType=94b44667d8eb01113483ddaebc003906&timeType=2ea36fadc45601e65397a3a4024b5800&locations=94b44667d8eb01465fcf3edabd006468" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Boston Dynamics is hiring"
      data-id="hiring"
      className="group relative inline-flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[13px] sm:px-2 sm:py-1 sm:text-[16px] text-black dark:text-zinc-200 transition-colors duration-200"
     >
      <span className="inline-flex items-center gap-1">
       <Image 
        src="https://bostondynamics.com/wp-content/uploads/2023/06/cropped-Boston-Dynamic_favicon-192x192.jpg" 
        alt="Boston Dynamics Icon" 
        width={16}
        height={16}
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
       />
       we&apos;re hiring!
      </span>
     </a>
    </AnimatedBackground>
   </div>
  </div>
 );
}
