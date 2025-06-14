import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CharacterItem } from '@/types';

interface CharacterCircleCardProps {
  character: CharacterItem;
}

const CharacterCircleCard: React.FC<CharacterCircleCardProps> = ({ character }) => {
  return (
    <Link href={`/characters/${character.id}`} className="group/charcard block text-center">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full border-2 border-transparent transition-colors duration-300 group-hover/charcard:border-primary">
        <Image
          src={character.imageUrl}
          alt={character.name}
          fill
          sizes="(max-width: 640px) 25vw, 128px"
          className="object-cover group-hover/charcard:scale-120 transition-transform duration-300 ease-in-out"
          data-ai-hint={character.imageHint}
        />
      </div>
      <h3 className="mt-2 text-sm sm:text-base font-semibold text-foreground group-hover/charcard:text-primary transition-colors truncate">
        {character.name}
      </h3>
      <p className="text-xs text-muted-foreground truncate">{character.seriesName}</p>
    </Link>
  );
};

export default CharacterCircleCard;
