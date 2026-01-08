'use client'
import React from 'react'
import Image from 'next/image'
import { FileTextIcon, ExternalLinkIcon, CodeIcon, DatabaseIcon, VideoIcon, PresentationIcon, ImageIcon, NewspaperIcon, TwitterIcon } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/animated-background'

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

export function ResearchPaper({ paper, priority = false }: { paper: any, priority?: boolean }) {
 return (
  <div key={paper.title} className="flex gap-6 items-center">
   <div className="flex-shrink-0 w-53">
    <div>
     {paper.images && paper.images.length > 1 ? (
      <div 
       className="relative rounded-2xl bg-zinc-50/40 dark:bg-zinc-800/40 p-1 cursor-zoom-in"
       onClick={() => {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm';
        modal.onclick = () => modal.remove();
        
        const container = document.createElement('div');
        container.className = 'max-h-[90vh] max-w-[90vw] rounded-xl overflow-y-auto bg-transparent';
        
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
           className="w-full rounded-xl object-cover border-[0.25px] border-[#F0F0ED] dark:border-zinc-800"
          />
         ) : (
          <Image
           key={index}
           src={imageSrc}
           alt={`${paper.title} - Image ${index + 1}`}
           width={400}
           height={300}
           className="w-full rounded-xl object-cover border-[0.25px] border-[#F0F0ED] dark:border-zinc-800"
           priority={priority}
          />
         );
        })}
       </div>
      </div>
     ) : (
      <div 
       className="relative rounded-2xl bg-zinc-50/40 dark:bg-zinc-800/40 p-1 cursor-zoom-in"
       onClick={() => {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm';
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
          className="w-full rounded-xl object-cover border-[0.25px] border-[#F0F0ED] dark:border-zinc-800"
         />
        ) : (
         <Image
          src={paper.image}
          alt={paper.title}
          width={400}
          height={300}
          className="w-full rounded-xl object-cover border-[0.25px] border-[#F0F0ED] dark:border-zinc-800"
          priority={priority}
         />
        );
       })()}
      </div>
     )}
    </div>
   </div>
   <div className="flex-1 min-w-0">
    <h4 className="font-semibold text-lg leading-tight text-zinc-900 dark:text-zinc-100">
     {paper.title}
    </h4>
    <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-1 mb-2">
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
          className={`underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-2 ${isSudharshan ? 'font-semibold text-zinc-900 dark:text-zinc-100' : 'text-black dark:text-zinc-300'}`}
         >
          {authorName}
         </a>
        ) : (
         <span className={isSudharshan ? 'font-semibold text-zinc-900 dark:text-zinc-100' : 'text-black dark:text-zinc-300'}>
          {authorName}
         </span>
        )}
        {!isLast && ', '}
       </span>
      );
     })}
    </p>
    <div className="text-lg font-[450] text-zinc-900 dark:text-zinc-100 flex flex-wrap items-baseline gap-2">
     <span>{paper.venue}, {paper.year}</span>
     {paper.highlights && paper.highlights.length > 0 && (
      <span className="text-lg font-semibold text-[#800000] dark:text-[#ff9999]">
       [{paper.highlights.join(', ')}]
      </span>
     )}
    </div>
    {paper.press && paper.press.length > 0 && (
     <div className="mt-1">
      <span className="text-base text-black dark:text-zinc-300 inline-flex items-center gap-1">
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
            className="underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-2 "
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

    <div className="mt-4 flex flex-wrap gap-1">
     <AnimatedBackground
      enableHover
      className="h-full w-full rounded-full bg-zinc-100 dark:bg-zinc-800"
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
     >
      {Object.entries(paper.links).map(([key, value]) => {
        if (!value) return null;
        return (
         <a
          key={key}
          href={value as string}
          target="_blank"
          rel="noopener noreferrer"
          data-id={key}
          className="group relative inline-flex shrink-0 items-center gap-1 rounded-full bg-transparent px-2 py-0.5 text-base text-black dark:text-zinc-200 transition-colors duration-200 hover:text-zinc-950 dark:hover:text-zinc-50"
         >
          <div className="flex items-center gap-1 whitespace-nowrap">
           {researchLinkIconFor(key)}
           <span>{key}</span>
          </div>
         </a>
        );
      })}
     </AnimatedBackground>
    </div>
   </div>
  </div>
 );
}
