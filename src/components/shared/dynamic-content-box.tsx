"use client";

import type React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { MovieItem } from '@/types';

interface DynamicContentBoxProps {
  content: {
    items: MovieItem[];
    isLarge?: boolean;
  };
  className?: string;
  cycleInterval?: number; // in milliseconds
  initialDelay?: number; // in milliseconds
}

const DynamicContentBox: React.FC<DynamicContentBoxProps> = ({ content, className, cycleInterval = 5000, initialDelay = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || content.items.length <= 1) return;

    let intervalId: NodeJS.Timeout;
    const startInterval = () => {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.items.length);
      }, cycleInterval);
    };

    const timeoutId = setTimeout(startInterval, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [mounted, content.items, cycleInterval, initialDelay]);

  if (!mounted || !content.items || content.items.length === 0) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-muted animate-pulse ${className || 'aspect-[4/3]'}`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-black/50 backdrop-blur-sm">
          <div className="h-4 bg-muted-foreground/30 rounded w-3/4 mb-1"></div>
          <div className="h-3 bg-muted-foreground/30 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  const currentItem = content.items[currentIndex];

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg group/moviecard ${className || 'aspect-[4/3]'}`}>
      <Image
        src={currentItem.imageUrl}
        alt={currentItem.title}
        fill
        sizes={content.isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 33vw"}
        className="object-cover group-hover/moviecard:scale-120 transition-transform duration-300 ease-in-out"
        data-ai-hint={currentItem.imageHint}
        priority={content.isLarge}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-white">
        <h3 className={`font-semibold truncate ${content.isLarge ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base'}`}>
          {currentItem.title}
        </h3>
        <div className={`flex items-center space-x-2 text-xs sm:text-sm text-gray-300 ${content.isLarge ? 'mt-1' : ''}`}>
          {currentItem.year && <span>{currentItem.year}</span>}
          {currentItem.year && currentItem.duration && <span>•</span>}
          {currentItem.duration && <span>{currentItem.duration}</span>}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentBox;
