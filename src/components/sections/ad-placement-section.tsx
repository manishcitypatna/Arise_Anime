
import type React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import type { MovieItem } from '@/types';
import { cn } from '@/lib/utils';

interface AdPlacementSectionProps {
  ad: MovieItem;
}

const AdPlacementSection: React.FC<AdPlacementSectionProps> = ({ ad }) => {
  return (
    <section className="my-8 sm:my-12 text-foreground">
      {/* Mobile Layout: Image then Content Below */}
      <div className="md:hidden">
        <div className={cn(
          "relative w-full overflow-hidden",
          "aspect-[17/6]" // Matches the placeholder 1020x360
        )}>
          <Image
            src={ad.imageUrl}
            alt={ad.title}
            fill
            className="object-cover"
            data-ai-hint={ad.imageHint}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 text-left">
            <h2 className="text-xl font-semibold text-accent mb-1.5">
              {ad.title}
            </h2>
            {ad.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {ad.description}
              </p>
            )}
            <div className="flex justify-start">
              <Button size="default" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <Play className="mr-1.5 h-4 w-4" /> Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original Overlay Content */}
      <div className="hidden md:block relative w-full h-auto aspect-[3.4/1.2] max-h-[400px]">
        <Image
          src={ad.imageUrl}
          alt={ad.title}
          fill
          className="object-cover"
          data-ai-hint={ad.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-start md:pr-[50%]">
            <div className="max-w-md md:max-w-lg flex flex-col items-start text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-2 font-headline">
                {ad.title}
              </h2>
              {ad.description && (
                <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-3">
                  {ad.description}
                </p>
              )}
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Play className="mr-2 h-5 w-5" /> Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdPlacementSection;
