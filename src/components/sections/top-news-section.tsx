
"use client";

import type React from 'react';
import { useMemo, useState, useEffect } from 'react';
import type { NewsItem, ItemDisplayConfig as GenericItemDisplayConfig } from '@/types';
import NewsArticleCard from '@/components/shared/news-article-card';
import ContentCarousel from '@/components/sections/content-carousel';
import { useIsMobile } from '@/hooks/use-mobile';

interface TopNewsSectionProps {
  title: string;
  newsItems: NewsItem[];
}

interface NewsColumn {
  id: string; 
  items: NewsItem[];
}

const NewsColumnRenderer: React.FC<{ item: NewsColumn; displayConfig?: GenericItemDisplayConfig }> = ({ item }) => {
  return (
    // Removed h-full to allow dynamic height based on content, especially for mobile single card
    <div className="flex flex-col space-y-3 sm:space-y-4"> 
      {item.items.map((newsArticle) => (
        <div key={newsArticle.id}> 
          <NewsArticleCard item={newsArticle} />
        </div>
      ))}
    </div>
  );
};

const TopNewsSection: React.FC<TopNewsSectionProps> = ({ title, newsItems }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useIsMobile();

  const finalCarouselItems = useMemo(() => {
    if (!newsItems || newsItems.length === 0) return [];

    if (!isClient) {
      // SSR or pre-hydration: Render as desktop to avoid layout shifts / hydration errors as much as possible
      const columns: NewsColumn[] = [];
      for (let i = 0; i < newsItems.length; i += 2) {
        const columnItems = [newsItems[i]];
        if (i + 1 < newsItems.length) {
          columnItems.push(newsItems[i + 1]);
        }
        columns.push({ id: `news-col-ssr-${Math.floor(i/2)}`, items: columnItems });
      }
      return columns;
    }

    if (isMobile) {
      // Mobile: Each news item is its own "column" (slide)
      return newsItems.map((newsItem, index) => ({
        id: `news-item-${newsItem.id}-${index}`, // Ensure unique ID for key prop
        items: [newsItem], 
      }));
    } else {
      // Desktop: two news items per column, stacked vertically
      const columns: NewsColumn[] = [];
      for (let i = 0; i < newsItems.length; i += 2) {
        const columnItems = [newsItems[i]];
        if (i + 1 < newsItems.length) {
          columnItems.push(newsItems[i + 1]);
        }
        columns.push({ id: `news-col-desktop-${Math.floor(i/2)}`, items: columnItems });
      }
      return columns;
    }
  }, [newsItems, isMobile, isClient]);

  if (!newsItems || newsItems.length === 0) {
    return (
      <section className="py-0 my-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-headline mb-4 sm:mb-6">{title}</h2>
          )}
          <p className="text-muted-foreground">No news items to display.</p>
        </div>
      </section>
    );
  }
  
  return (
    <ContentCarousel<NewsColumn>
      title={title}
      items={finalCarouselItems}
      ItemComponent={NewsColumnRenderer}
      itemDisplayConfig={{}} 
      // Mobile: w-56 to show ~1.5 cards. Desktop: specific widths for sm, md, lg+
      cardClassName="w-56 sm:w-72 md:w-80 lg:w-[26rem] shrink-0"
    />
  );
};

export default TopNewsSection;
