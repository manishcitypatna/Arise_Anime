
import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { MovieItem, MovieCardDisplayConfig as LocalMovieCardDisplayConfig } from '@/types'; // Renamed to avoid conflict
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  item: MovieItem;
  displayConfig?: LocalMovieCardDisplayConfig; // Use the renamed type
}

const MovieCard: React.FC<MovieCardProps> = ({ item, displayConfig }) => {
  const finalAspectRatio = displayConfig?.aspectRatio || item.aspectRatio;

  let aspectRatioClass = 'aspect-[3/4]'; // Default
  if (finalAspectRatio === '4:3') aspectRatioClass = 'aspect-[4/3]';
  else if (finalAspectRatio === '16:9') aspectRatioClass = 'aspect-[16/9]';
  else if (finalAspectRatio === '7.5:5') aspectRatioClass = 'aspect-[7.5/5]';
  else if (finalAspectRatio === '1:0.6') aspectRatioClass = 'aspect-[1/0.6]';

  const detailsString = [
    displayConfig?.showYear && item.year,
    displayConfig?.showDuration && item.duration,
    displayConfig?.showReleaseDate && item.releaseDate,
  ].filter(Boolean).join(' • ');

  return (
    <Link href={`/watch/${item.id}`} className="group/moviecard block w-full shrink-0">
      <Card className="overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out flex flex-col h-full">
        <div className={cn("relative w-full overflow-hidden", aspectRatioClass)}> {/* Added overflow-hidden */}
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover/moviecard:scale-120 transition-transform duration-300 ease-in-out" // Added transform classes
            data-ai-hint={item.imageHint}
          />
        </div>
        <CardContent className={cn(
            "p-2 sm:p-3 flex flex-col justify-start overflow-hidden",
            displayConfig?.cardContentClassName || "h-[60px] sm:h-[72px]" // Default height if no custom class
        )}>
          <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover/moviecard:text-primary transition-colors line-clamp-2 mb-0.5">
            {item.title}
          </h3>
          
          {detailsString && (
            <p className="text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors mt-0.5 line-clamp-1">
              {detailsString}
            </p>
          )}

          {displayConfig?.showRating && item.rating && (
            <p className="text-xs text-amber-400 mt-0.5 line-clamp-1">{item.rating}</p>
          )}

          {displayConfig?.showRecommendationReason && item.recommendationReason && (
            <p className="text-xs text-accent mt-0.5 line-clamp-1">{item.recommendationReason}</p>
          )}
          {displayConfig?.showHypeReason && item.hypeReason && (
            <p className="text-xs text-primary mt-0.5 line-clamp-1">{item.hypeReason}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
