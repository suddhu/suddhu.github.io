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

// Component for individual video/image items
function MediaItem({ gif, index }: { gif: any; index: number }) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (gif.type === 'video' && videoRef.current) {
      const video = videoRef.current;
      const handleLoadedMetadata = () => {
        setDimensions({
          width: video.videoWidth,
          height: video.videoHeight
        });
      };
      
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, [gif.src, gif.type]);
  
  // Calculate exact width based on actual aspect ratio
  const getContainerStyle = () => {
    if (dimensions && gif.type === 'video') {
      const aspectRatio = dimensions.width / dimensions.height;
      const containerHeight = 192; // h-48 = 192px
      const calculatedWidth = containerHeight * aspectRatio;
      return { width: `${calculatedWidth}px` };
    }
    
    // Fallback for images or videos without dimensions
    return { width: '320px' };
  };
  
  return (
    <div
      key={index}
      className="flex-shrink-0 rounded-lg overflow-hidden bg-zinc-100 shadow-lg h-48"
      style={getContainerStyle()}
    >
      {gif.type === 'video' ? (
        <video
          ref={videoRef}
          src={gif.src}
          className="w-full h-full object-contain"
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
          className="w-full h-full object-contain"
          priority={false}
        />
      )}
    </div>
  );
}

export function InfiniteScroll({ gifs, speed = 30 }: InfiniteScrollProps) {
  const [duplicatedGifs, setDuplicatedGifs] = useState<typeof gifs>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const totalPausedTimeRef = useRef<number>(0);

  useEffect(() => {
    // Duplicate the GIFs to create seamless infinite scroll
    setDuplicatedGifs([...gifs, ...gifs]);
    // Initialize start time
    startTimeRef.current = performance.now();
  }, [gifs]);

  // Calculate the width of one set of GIFs using estimated widths
  // This is an approximation since we now have dynamic widths
  const singleSetWidth = gifs.reduce((total, gif) => {
    if (gif.src.includes('neuralfeels_website.m4v') || 
        gif.src.includes('rotateit.mp4') || 
        gif.src.includes('midastouch.m4v')) {
      return total + 120 + 32; // Portrait videos: ~120px + gap (estimated)
    } else {
      return total + 320 + 32; // Landscape videos: ~320px + gap (estimated)
    }
  }, 0);

  // Continuous animation function
  const animate = () => {
    if (!isHovered) {
      const now = performance.now();
      const totalElapsed = (now - startTimeRef.current) / 1000; // Convert to seconds
      const activeTime = totalElapsed - totalPausedTimeRef.current;
      const position = -(activeTime * (singleSetWidth / speed)) % singleSetWidth;
      setCurrentX(position);
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  // Start animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, singleSetWidth, speed]);

  // Handle hover start
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle hover end
  const handleMouseLeave = () => {
    // Add the paused time to total paused time
    const now = performance.now();
    const pauseDuration = (now - startTimeRef.current) / 1000 - totalPausedTimeRef.current - (speed * Math.abs(currentX) / singleSetWidth);
    totalPausedTimeRef.current += pauseDuration;
    setIsHovered(false);
  };

  return (
    <div className="w-full">
      {/* Scroll Container */}
      <div 
        className="overflow-hidden rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="flex gap-8"
          animate={{ x: currentX }}
          transition={{ type: 'tween', duration: 0 }}
        >
        {duplicatedGifs.map((gif, index) => (
          <MediaItem key={index} gif={gif} index={index} />
        ))}
        </motion.div>
      </div>
    </div>
  );
}
