'use client';

import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface InfiniteScrollProps {
  gifs: {
    src: string;
    alt: string;
    type?: 'image' | 'video';
  }[];
  speed?: number;
}

export function InfiniteScroll({ gifs, speed = 20 }: InfiniteScrollProps) {
  const [duplicatedGifs, setDuplicatedGifs] = useState<typeof gifs>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isInDuplicatedSet, setIsInDuplicatedSet] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    // Duplicate the GIFs to create seamless infinite scroll
    setDuplicatedGifs([...gifs, ...gifs]);
    // Initialize the scroll to start automatically
    setIsInitialized(true);
  }, [gifs]);

  // Calculate the width of one set of GIFs (320px each + 32px gap)
  const singleSetWidth = gifs.length * (320 + 32);
  const itemWidth = 320 + 32; // width of each item including gap
  const itemHeight = 192 + 40; // height of video (192px) + caption space (40px)

  // Handle jump to next video
  const jumpToNext = () => {
    setIsJumping(true);
    const newIndex = (currentVideoIndex + 1) % gifs.length;
    setCurrentVideoIndex(newIndex);
    
    // Calculate offset to center the target video
    // Container width is flex-1, so we need to estimate it or use a fixed value
    // For now, let's assume the container takes most of the viewport width minus button space
    const containerWidth = 800; // Approximate container width
    const videoWidth = 320; // Width of each video
    const centerOffset = (containerWidth - videoWidth) / 2;
    
    // If we're jumping from the last video to the first, we need to jump to the duplicated set
    let newOffset;
    if (currentVideoIndex === gifs.length - 1 && newIndex === 0) {
      // Jump to the first video in the duplicated set, centered
      newOffset = -gifs.length * itemWidth + centerOffset;
      setIsInDuplicatedSet(true);
    } else if (isInDuplicatedSet && newIndex === 0) {
      // We're already in the duplicated set, stay there
      newOffset = -gifs.length * itemWidth + centerOffset;
    } else {
      // Jump to the target video, centered
      newOffset = -newIndex * itemWidth + centerOffset;
    }
    
    setScrollOffset(newOffset);
    setTimeout(() => setIsJumping(false), 300); // Reset after animation
  };

  // Handle jump to previous video
  const jumpToPrevious = () => {
    setIsJumping(true);
    const newIndex = (currentVideoIndex - 1 + gifs.length) % gifs.length;
    setCurrentVideoIndex(newIndex);
    
    // Calculate offset to center the target video
    const containerWidth = 800; // Approximate container width
    const videoWidth = 320; // Width of each video
    const centerOffset = (containerWidth - videoWidth) / 2;
    
    // If we're jumping from the first video to the last, we need to jump to the original set
    let newOffset;
    if (currentVideoIndex === 0 && newIndex === gifs.length - 1) {
      // Jump to the last video in the original set, centered
      newOffset = -(gifs.length - 1) * itemWidth + centerOffset;
      setIsInDuplicatedSet(false);
    } else if (!isInDuplicatedSet && newIndex === gifs.length - 1) {
      // We're already in the original set, stay there
      newOffset = -(gifs.length - 1) * itemWidth + centerOffset;
    } else {
      // Jump to the target video, centered
      newOffset = -newIndex * itemWidth + centerOffset;
    }
    
    setScrollOffset(newOffset);
    setTimeout(() => setIsJumping(false), 300); // Reset after animation
  };

  // Calculate the animation start and end positions based on current offset
  const animationStart = scrollOffset;
  const animationEnd = scrollOffset - singleSetWidth;

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Left Navigation Button */}
      <motion.button
        onClick={jumpToPrevious}
        className="flex-shrink-0 group relative inline-flex items-center justify-center w-8 h-48 bg-zinc-50 text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700"
        style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xs font-bold">&lt;</span>
      </motion.button>

      {/* Scroll Container */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          ref={scrollRef}
          className="flex gap-8"
          animate={!isInitialized || isJumping ? undefined : {
            x: [animationStart, animationEnd],
          }}
          transition={!isInitialized || isJumping ? undefined : {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: speed,
              ease: 'linear',
            },
          }}
          style={{
            x: isJumping ? scrollOffset : undefined,
          }}
        >
        {duplicatedGifs.map((gif, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-48 rounded-lg overflow-hidden bg-zinc-100 shadow-lg"
          >
            {gif.type === 'video' ? (
              <video
                src={gif.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
                          ) : (
                <Image
                  src={gif.src}
                  alt={gif.alt}
                  width={320}
                  height={192}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              )}
          </div>
        ))}
        </motion.div>
      </div>

      {/* Right Navigation Button */}
      <motion.button
        onClick={jumpToNext}
        className="flex-shrink-0 group relative inline-flex items-center justify-center w-8 h-48 bg-zinc-50 text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700"
        style={{ fontFamily: 'var(--font-press-start-2p), cursive' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xs font-bold">&gt;</span>
      </motion.button>
    </div>
  );
}
