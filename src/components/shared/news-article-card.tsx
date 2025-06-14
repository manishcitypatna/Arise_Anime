import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { NewsItem, ItemDisplayConfig as GenericItemDisplayConfig } from '@/types';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface NewsArticleCardProps {
  item: NewsItem;
  displayConfig?: GenericItemDisplayConfig;
}

const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ item, displayConfig }) => {
  return (
    <Link href={`/news/${item.id}`} className="group/moviecard block h-full">
      <Card className={cn(
        "overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out flex flex-col",
        "sm:flex-row sm:h-36"
      )}>
        <div className={cn(
          "w-full overflow-hidden",
          "sm:w-2/5 lg:w-1/3 sm:shrink-0"
        )}>
          <div className={cn(
            "relative w-full aspect-[4/3]", // Ensures 4:3 aspect ratio for mobile
            "sm:aspect-auto sm:h-full"
          )}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 33vw"
              className="object-cover group-hover/moviecard:scale-120 transition-transform duration-300 ease-in-out"
              data-ai-hint={item.imageHint}
            />
          </div>
        </div>
        <div className={cn(
          "flex flex-col justify-between p-3 flex-grow",
          "w-full sm:w-3/5 lg:w-2/3"
        )}>
          <div className="min-h-0">
            <CardTitle className="text-base sm:text-sm font-semibold text-foreground group-hover/moviecard:text-primary transition-colors line-clamp-2 mb-1 sm:mb-1">
              {item.title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors line-clamp-3 sm:line-clamp-2">
              {item.description}
            </CardDescription>
          </div>
          <div className="mt-2 pt-2 sm:mt-1 text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors border-t border-border/50 sm:border-none">
            <div className="flex flex-wrap justify-between items-center gap-x-2">
              <span>{item.publishDate}</span>
              {item.author && <span className="truncate">{item.author}</span>}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NewsArticleCard;
