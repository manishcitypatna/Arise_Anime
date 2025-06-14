
"use client"; // TopCharactersSection now uses ContentCarousel which needs client context due to hooks

import type React from 'react';
import type { CharacterItem } from '@/types';
import ContentCarousel from '@/components/sections/content-carousel';
import CharacterCircleCard from '@/components/shared/character-circle-card'; // Import directly

interface TopCharactersSectionProps {
  title: string;
  characters: CharacterItem[];
}

// Renderer component to be used by ContentCarousel
const CharacterCardRenderer: React.FC<{ item: CharacterItem }> = ({ item }) => {
  return <CharacterCircleCard character={item} />;
};

const TopCharactersSection: React.FC<TopCharactersSectionProps> = ({ title, characters }) => {
  return (
    <ContentCarousel<CharacterItem>
      title={title}
      items={characters}
      ItemComponent={CharacterCardRenderer} // Pass the renderer here
      // cardClassName for the column width in ContentCarousel (if it were double-liner)
      // For single line of circles, this can define individual circle card wrapper width if ContentCarousel is adapted
      // For now, CharacterCircleCard itself has responsive sizing.
      // Let's adjust cardClassName to be for the container of each circle,
      // which makes sense if ContentCarousel is single-row and this is one item per slot.
      cardClassName="w-24 sm:w-28 md:w-32 shrink-0" // Width for each character card container
    />
  );
};

// Expose the renderer if it needs to be imported by page.tsx (though direct import is better)
// This is now less necessary if TopCharactersSection directly uses ContentCarousel
// TopCharactersSection.CharacterCardRenderer = CharacterCardRenderer;

export default TopCharactersSection;
