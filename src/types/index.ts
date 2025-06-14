export interface MovieItem {
  id: string;
  title: string;
  year?: string;
  duration?: string;
  rating?: string; 
  description?: string; 
  imageUrl: string;
  imageHint: string;
  aspectRatio: '3:4' | '4:3' | '16:9' | '3.4:1.2' | '7.5:5' | '1:0.6' | 'dynamic';
  recommendationReason?: string;
  hypeReason?: string;
  releaseDate?: string; 
}

export interface CharacterItem {
  id: string;
  name: string;
  seriesName: string;
  imageUrl: string;
  imageHint: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  author: string;
  imageUrl: string;
  imageHint: string;
  highlight: string;
  publisher: string;
}

export interface AdBannerItem {
  id: string;
  title: string;
  description?: string;
  ctaText: string;
  imageUrl: string;
  imageHint: string;
  aspectRatio: '3.4:0.7' | '3.4:1.2';
  overlayPosition: 'left' | 'right';
  textAlign?: 'text-left' | 'text-right' | 'text-center';
}

export interface DynamicBoxContent {
  items: MovieItem[]; 
  sizeClass?: string; 
  isLarge?: boolean; 
}

// This is a more specific config for MovieCard items
export interface MovieCardDisplayConfig {
  aspectRatio?: '3:4' | '4:3' | '16:9' | '7.5:5' | '1:0.6' | 'dynamic';
  showYear?: boolean;
  showDuration?: boolean;
  showReleaseDate?: boolean;
  showRating?: boolean;
  showRecommendationReason?: boolean;
  showHypeReason?: boolean;
  cardContentClassName?: string; // Allows custom classes for the CardContent of a MovieCard
}

// Generic ItemDisplayConfig used by ContentCarousel.
// If ContentCarousel handles different item types with different display config needs,
// this could become a union type, e.g., MovieCardDisplayConfig | CharacterCardDisplayConfig.
// For now, we assume it's primarily for MovieCard-like items or compatible structures.
export type ItemDisplayConfig = MovieCardDisplayConfig;

