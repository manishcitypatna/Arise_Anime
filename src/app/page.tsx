
"use client";

import Link from 'next/link';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import ContentCarousel from '@/components/sections/content-carousel';
import AdPlacementSection from '@/components/sections/ad-placement-section';
import TvShowGridSection from '@/components/sections/tv-show-grid-section';
import AdBannerSection from '@/components/sections/ad-banner-section';
import TopCharactersSection from '@/components/sections/top-characters-section';
import TopNewsSection from '@/components/sections/top-news-section';
import MainFooter from '@/components/layout/main-footer';

import MovieCard from '@/components/shared/movie-card';
import CustomTallNextArrowIcon from '@/components/icons/CustomTallNextArrowIcon';
import CustomTallPrevArrowIcon from '@/components/icons/CustomTallPrevArrowIcon';
import type { MovieItem, NewsItem, CharacterItem, ItemDisplayConfig } from '@/types';


import { 
  heroMoviesData, 
  trendingMoviesData, 
  newReleasesData, 
  adPlacementData, 
  topPicksData,
  tvShowGridData,
  adBannerRightOverlayData,
  recommendedTvShowsData,
  topComingSoonData,
  adBannerLeftOverlayData,
  topCharactersData,
  topNewsData
} from '@/data/mock-data';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16"> {/* Adjust pt based on header height (h-16) */}
        <HeroSection movies={heroMoviesData} />
        
        <div className="mt-8 sm:mt-12">
          <ContentCarousel<MovieItem>
            title="Trending Movies" 
            items={trendingMoviesData}
            ItemComponent={MovieCard}
            itemDisplayConfig={{ aspectRatio: '3:4', showYear: true, showDuration: true }}
            cardClassName="w-36 sm:w-40 md:w-44 lg:w-48 shrink-0"
            overrideLeftArrowIcon={CustomTallPrevArrowIcon}
            overrideRightArrowIcon={CustomTallNextArrowIcon}
            arrowWrapperClass="h-[192px] sm:h-[213.33px] md:h-[234.66px] lg:h-[256px] w-14 p-0"
            arrowIconClass="h-full w-auto"
          />
        </div>
        
        <div className="mt-8 sm:mt-12">
          <ContentCarousel<MovieItem>
            title="New Releases" 
            items={newReleasesData}
            ItemComponent={MovieCard}
            itemDisplayConfig={{ aspectRatio: '4:3', showYear: true, showDuration: true }}
            cardClassName="w-40 sm:w-48 md:w-56 lg:w-64 shrink-0" 
            overrideLeftArrowIcon={CustomTallPrevArrowIcon}
            overrideRightArrowIcon={CustomTallNextArrowIcon}
            arrowWrapperClass="h-[120px] sm:h-[144px] md:h-[168px] lg:h-[192px] w-12 p-0"
            arrowIconClass="h-full w-auto"
          />
        </div>
        
        <div className="mt-8 sm:mt-12">
          <AdPlacementSection ad={adPlacementData} />
        </div>
        
        <div className="mt-8 sm:mt-12">
          <ContentCarousel<MovieItem>
            title="Top Picks for You" 
            items={topPicksData}
            ItemComponent={MovieCard}
            itemDisplayConfig={{ 
              aspectRatio: '3:4', 
              showYear: false, 
              showDuration: false,
              cardContentClassName: "h-[36px] sm:h-[48px]" // Custom height for Top Picks cards
            }}
            cardClassName="w-36 sm:w-40 md:w-44 lg:w-48 shrink-0"
            overrideLeftArrowIcon={CustomTallPrevArrowIcon}
            overrideRightArrowIcon={CustomTallNextArrowIcon}
            arrowWrapperClass="h-[192px] sm:h-[213.33px] md:h-[234.66px] lg:h-[256px] w-14 p-0"
            arrowIconClass="h-full w-auto"
          />
        </div>

        <div className="mt-8 sm:mt-12">
          <TvShowGridSection title="TV Series / Show / Movie" data={tvShowGridData} />
        </div>

        <div className="mt-8 sm:mt-12">
          <AdBannerSection ad={adBannerRightOverlayData} />
        </div>

        <div className="mt-8 sm:mt-12">
          <ContentCarousel<MovieItem>
            title="Recommended TV Shows"
            items={recommendedTvShowsData}
            ItemComponent={MovieCard}
            itemDisplayConfig={{ aspectRatio: '7.5:5', showReleaseDate: true, showDuration: true }}
            cardClassName="w-36 sm:w-40 md:w-44 lg:w-48 shrink-0" 
            overrideLeftArrowIcon={CustomTallPrevArrowIcon}
            overrideRightArrowIcon={CustomTallNextArrowIcon}
            arrowWrapperClass="h-[96px] sm:h-[106.66px] md:h-[117.33px] lg:h-[128px] w-10 p-0"
            arrowIconClass="h-full w-auto"
          />
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-headline">
                Top Coming Soon
              </h2>
              <Link href="#" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-2 mb-4 sm:mb-6">
              These are the top Anime/movie coming this month.
            </p>
          </div>
          <ContentCarousel<MovieItem>
            items={topComingSoonData}
            ItemComponent={MovieCard}
            itemDisplayConfig={{ aspectRatio: '1:0.6', showReleaseDate: true, showDuration: true }}
            cardClassName="w-40 sm:w-48 md:w-56 lg:w-60 shrink-0" 
            overrideLeftArrowIcon={CustomTallPrevArrowIcon}
            overrideRightArrowIcon={CustomTallNextArrowIcon}
            arrowWrapperClass="h-[96px] sm:h-[115.2px] md:h-[134.4px] lg:h-[144px] w-10 p-0"
            arrowIconClass="h-full w-auto"
          />
        </div>

        <div className="mt-8 sm:mt-12">
          <AdBannerSection ad={adBannerLeftOverlayData} />
        </div>
        
        <div className="mt-8 sm:mt-12">
          <TopCharactersSection title="Top Characters" characters={topCharactersData} />
        </div>
        
        <div className="mt-8 sm:mt-12">
          <TopNewsSection title="Top News" newsItems={topNewsData} />
        </div>

      </main>
      
      <MainFooter />
    </>
  );
}

TopCharactersSection.CharacterCardRenderer = ({ item }: { item: CharacterItem }) => {
  const CharacterCircleCard = require('@/components/shared/character-circle-card').default;
  return <CharacterCircleCard character={item} />;
};

