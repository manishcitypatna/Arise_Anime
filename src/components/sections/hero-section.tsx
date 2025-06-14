
"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play, PlusCircle, Download, Star, Clock } from 'lucide-react';
import type { MovieItem } from '@/types';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  movies: MovieItem[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !movies || movies.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 1500); 

    return () => clearInterval(timer);
  }, [movies, mounted]);

  const currentMovie = mounted ? movies[currentIndex] : (movies.length > 0 ? movies[0] : null);

  if (!currentMovie && !mounted) {
    return (
      <section className="relative w-full aspect-video md:h-[calc(100vh-4rem)] md:min-h-[500px] md:max-h-[800px] bg-muted flex items-center justify-center">
        <div className="animate-pulse w-full h-full">
          <div className="w-full h-full bg-muted-foreground/30"></div>
        </div>
      </section>
    );
  }
  
  if (!currentMovie) {
    return (
         <section className="relative w-full aspect-video md:h-[calc(100vh-4rem)] md:min-h-[500px] md:max-h-[800px] bg-muted flex items-center justify-center">
           <p className="text-muted-foreground">No movie data available.</p>
         </section>
    );
  }

  const renderMetadata = (movie: MovieItem, isMobile: boolean) => {
    const parts = [
      movie.rating,
      movie.year,
      movie.duration,
    ].filter(Boolean); 

    return (
      <div className={cn(
        "flex items-center flex-wrap", 
        isMobile ? "space-x-1 text-xs text-muted-foreground mb-2" : "space-x-2 text-sm text-gray-300 my-3 sm:text-base"
      )}>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part === movie.rating && typeof movie.rating === 'string' && (/\d+(\.\d+)?\/\d+/.test(movie.rating) || movie.rating.toLowerCase().includes('imdb') || movie.rating.toLowerCase().includes('rotten tomatoes') || movie.rating.toLowerCase().includes('metacritic') || movie.rating.toLowerCase().includes('users') ) && (
                <Star className={cn("text-yellow-400 fill-yellow-400", isMobile ? "mr-1 h-3 w-3" : "mr-1.5 h-4 w-4")} />
            )}
            {part === movie.duration && movie.duration && (
                <Clock className={isMobile ? "mr-1 h-3 w-3" : "mr-1.5 h-4 w-4"} />
            )}
            <span className={(part === movie.rating && (/\d+(\.\d+)?\/\d+/.test(movie.rating || '') || movie.rating?.toLowerCase().includes('imdb') || movie.rating?.toLowerCase().includes('rotten tomatoes') || movie.rating?.toLowerCase().includes('metacritic') || movie.rating?.toLowerCase().includes('users'))) || (part === movie.duration && movie.duration) ? "ml-0.5" : ""}>
              {part}
            </span>
            {index < parts.length - 1 && <span className={cn("mx-1 select-none font-semibold text-primary", isMobile ? "mx-1" : "mx-1.5")}>|</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };


  return (
    <section className="w-full text-foreground">
      {/* Mobile Layout: Image then Content Below */}
      <div className="md:hidden">
        <div className="relative w-full aspect-video">
          <Image
            src={currentMovie.imageUrl}
            alt={currentMovie.title}
            fill
            priority={currentIndex === 0}
            className="object-cover"
            data-ai-hint={currentMovie.imageHint}
            key={`${currentMovie.id}-mobile-img`}
          />
          {movies.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10">
              {movies.map((_, index) => (
                <button
                  key={`dot-mobile-${index}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 ease-in-out",
                    currentIndex === index ? "bg-primary scale-125" : "bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          )}
        </div>
        <div className="px-4 pb-6 pt-4 bg-background text-left">
          <h1 className="text-2xl font-bold text-foreground mb-1.5">
            {currentMovie.title}
          </h1>
          
          {renderMetadata(currentMovie, true)}

          {currentMovie.description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {currentMovie.description}
            </p>
          )}

          <div className="mt-4 flex flex-row gap-2 w-full">
            <Button
              size="default"
              className="flex-1 min-w-0 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Play className="mr-1.5 h-4 w-4" /> Play Now
            </Button>
            <Button
              size="default"
              variant="secondary"
              className="flex-1 min-w-0 bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
            >
              <PlusCircle className="mr-1.5 h-4 w-4" /> Watch Later
            </Button>
            <Button
              size="default"
              variant="secondary"
              className="flex-1 min-w-0 bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
            >
              <Download className="mr-1.5 h-4 w-4" /> Download
            </Button>
          </div>
        </div>
      </div>
      
      {/* Desktop Layout: Overlay Content */}
      <div className={cn(
        "hidden md:flex relative w-full text-foreground", 
        "h-[calc(100vh-4rem)] min-h-[500px] max-h-[800px]" 
      )}>
        <Image
          src={currentMovie.imageUrl}
          alt={currentMovie.title}
          fill
          priority={currentIndex === 0}
          className="object-cover"
          data-ai-hint={currentMovie.imageHint}
          key={`${currentMovie.id}-desktop-img`}
        />
        <div className="absolute inset-0 flex items-center z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
            <div className="max-w-md md:max-w-lg text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-headline">
                {currentMovie.title}
              </h1>
              
              {renderMetadata(currentMovie, false)}

              {currentMovie.description && (
                <p className="text-sm leading-relaxed text-gray-200 mb-4 sm:text-base md:text-lg sm:mb-6">
                  {currentMovie.description}
                </p>
              )}

              <div className="mt-4 flex flex-row items-center gap-3">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Play className="mr-2 h-5 w-5" /> Play Now
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <PlusCircle className="mr-2 h-5 w-5" /> Watch Later
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Download className="mr-2 h-5 w-5" /> Download
                </Button>
              </div>
            </div>
          </div>
        </div>

        {movies.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {movies.map((_, index) => (
              <button
                key={`dot-desktop-${index}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ease-in-out",
                  currentIndex === index ? "bg-primary scale-125" : "bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
