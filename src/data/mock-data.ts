import type { MovieItem, CharacterItem, NewsItem, AdBannerItem, DynamicBoxContent } from '@/types';

export const heroMoviesData: MovieItem[] = [
  {
    id: 'hero-1',
    title: 'Attack on Titan',
    year: '2013',
    duration: 'TV Series',
    description: 'Humanity fights for survival against giant humanoid Titans in a post-apocalyptic world.',
    imageUrl: '/hero/attack_on_titan_poster.png',
    imageHint: 'action, titans, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-2',
    title: 'Demon Slayer: Kimetsu no Yaiba',
    year: '2019',
    duration: 'TV Series',
    description: 'A young boy becomes a demon slayer to avenge his family and save his sister.',
    imageUrl: '/hero/demon_slayer_poster.png',
    imageHint: 'demon, sword, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-3',
    title: 'Jujutsu Kaisen',
    year: '2020',
    duration: 'TV Series',
    description: 'A high schooler joins a secret organization to fight supernatural curses.',
    imageUrl: '/hero/jujutsu_kaisen_poster.png',
    imageHint: 'curses, action, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-4',
    title: 'My Hero Academia',
    year: '2016',
    duration: 'TV Series',
    description: 'In a world of superpowers, a powerless boy dreams of becoming a hero.',
    imageUrl: '/hero/my_hero_academia_poster.webp',
    imageHint: 'superhero, school, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-5',
    title: 'One Piece',
    year: '1999',
    duration: 'TV Series',
    description: 'A young pirate and his crew search for the ultimate treasure, the One Piece.',
    imageUrl: '/hero/one_piece_poster.png',
    imageHint: 'pirate, adventure, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-6',
    title: 'Naruto',
    year: '2002',
    duration: 'TV Series',
    description: 'A young ninja seeks recognition and dreams of becoming the Hokage.',
    imageUrl: '/hero/naruto_poster.png',
    imageHint: 'ninja, action, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-7',
    title: 'Fullmetal Alchemist: Brotherhood',
    year: '2009',
    duration: 'TV Series',
    description: 'Two brothers use alchemy in their quest to restore their bodies.',
    imageUrl: '/hero/fullmetal_alchemist_poster.png',
    imageHint: 'alchemy, brothers, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-8',
    title: 'Death Note',
    year: '2006',
    duration: 'TV Series',
    description: 'A high school student discovers a notebook with deadly powers.',
    imageUrl: '/hero/death_note_poster.png',
    imageHint: 'mystery, supernatural, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-9',
    title: 'Steins;Gate',
    year: '2011',
    duration: 'TV Series',
    description: 'A group of friends discover time travel and face its consequences.',
    imageUrl: '/hero/steins;gate_poster.png',
    imageHint: 'sci-fi, time travel, anime',
    aspectRatio: '16:9',
  },
  {
    id: 'hero-10',
    title: 'Your Name',
    year: '2016',
    duration: 'Movie',
    description: 'Two teenagers mysteriously swap bodies and form a unique connection.',
    imageUrl: '/hero/your_name._poster.png',
    imageHint: 'romance, fantasy, anime',
    aspectRatio: '16:9',
  },
];

export const trendingMoviesData: MovieItem[] = [
  { id: 'tm-1', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '3:4' },
  { id: 'tm-2', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '3:4' },
  { id: 'tm-3', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '3:4' },
  { id: 'tm-4', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '3:4' },
  { id: 'tm-5', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '3:4' },
  { id: 'tm-6', title: 'Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '3:4' },
  { id: 'tm-7', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '3:4' },
  { id: 'tm-8', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '3:4' },
  { id: 'tm-9', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '3:4' },
  { id: 'tm-10', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '3:4' },
];

export const newReleasesData: MovieItem[] = [
  { id: 'nr-1', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '4:3' },
  { id: 'nr-2', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '4:3' },
  { id: 'nr-3', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'nr-4', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'nr-5', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'nr-6', title: 'Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '4:3' },
  { id: 'nr-7', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '4:3' },
  { id: 'nr-8', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'nr-9', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'nr-10', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '4:3' },
  { id: 'nr-11', title: "Hell's Paradise", year: '2023', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1015/127974.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'nr-12', title: "Frieren: Beyond Journey's End", year: '2023', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1015/127974.jpg', imageHint: 'fantasy, adventure, anime', aspectRatio: '4:3' },
];

export const adPlacementData: MovieItem = {
  id: 'ad-1',
  title: 'Sponsored: The Cosmic Odyssey',
  description: 'Embark on an epic journey across the universe. New series, streaming exclusively on Universe+.',
  imageUrl: '/banners/After_New_Releases.png',
  imageHint: 'space nebula galaxy',
  aspectRatio: '3.4:1.2',
};

export const topPicksData: MovieItem[] = [
  { id: 'tp-1', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '4:3' },
  { id: 'tp-2', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '4:3' },
  { id: 'tp-3', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tp-4', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tp-5', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'tp-6', title: 'Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '4:3' },
  { id: 'tp-7', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '4:3' },
  { id: 'tp-8', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tp-9', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tp-10', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '4:3' },
];

// Section 7: TV Show Grid Data
const dynamicBoxItems1: MovieItem[] = [
  { id: 'dg-1a', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '4:3' },
  { id: 'dg-1b', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '4:3' },
];
const dynamicBoxItems2: MovieItem[] = [
  { id: 'dg-2a', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'dg-2b', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
];
const dynamicBoxItems3: MovieItem[] = [
  { id: 'dg-3a', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'dg-3b', title: 'Demon Slayer: Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '4:3' },
];
const dynamicBoxItems4: MovieItem[] = [
  { id: 'dg-4a', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '4:3' },
  { id: 'dg-4b', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
];
const dynamicBoxItems5: MovieItem[] = [
  { id: 'dg-5a', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'dg-5b', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '4:3' },
];
const dynamicBoxItems6: MovieItem[] = [
  { id: 'dg-6a', title: 'Dragon Ball Z', year: '1989', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/20936.jpg', imageHint: 'action, martial arts, anime', aspectRatio: '4:3' },
  { id: 'dg-6b', title: 'Bleach', year: '2004', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg', imageHint: 'action, shinigami, anime', aspectRatio: '4:3' },
];
const dynamicBoxItemsLarge: MovieItem[] = [
  { id: 'dg-L1', title: 'Spirited Away', year: '2001', duration: 'Movie', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg', imageHint: 'fantasy, ghibli, anime', aspectRatio: '4:3' },
  { id: 'dg-L2', title: 'Your Name', year: '2016', duration: 'Movie', imageUrl: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg', imageHint: 'romance, fantasy, anime', aspectRatio: '4:3' },
  { id: 'dg-L3', title: 'A Silent Voice', year: '2016', duration: 'Movie', imageUrl: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg', imageHint: 'drama, romance, anime', aspectRatio: '4:3' },
];

export const tvShowGridData: DynamicBoxContent[] = [
  { items: dynamicBoxItems1, sizeClass: 'aspect-[4/3]' },
  { items: dynamicBoxItems2, sizeClass: 'aspect-[4/3]' },
  { items: dynamicBoxItems3, sizeClass: 'aspect-[4/3]' },
  { items: dynamicBoxItems4, sizeClass: 'aspect-[4/3]' },
  { items: dynamicBoxItems5, sizeClass: 'aspect-[4/3]' },
  { items: dynamicBoxItems6, sizeClass: 'aspect-[4/3]' },
  { items: dynamicBoxItemsLarge, sizeClass: 'md:col-span-2 aspect-[4/3]', isLarge: true },
];


// Section 8: Ad Placement (Right Overlay)
export const adBannerRightOverlayData: AdBannerItem = {
  id: 'ad-banner-1',
  title: 'Premium Release: Solaris',
  description: 'Experience the breathtaking visuals of Solaris, available now for premium subscribers.',
  ctaText: 'Play Now',
  imageUrl: '/banners/After _TV_Series _ Show _ Movie.png',
  imageHint: 'sci-fi planet movie',
  aspectRatio: '3.4:0.7',
  overlayPosition: 'right',
  textAlign: 'text-right',
};

// Section 9: Recommended TV Shows
export const recommendedTvShowsData: MovieItem[] = [
  { id: 'rec-1', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '4:3' },
  { id: 'rec-2', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '4:3' },
  { id: 'rec-3', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'rec-4', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'rec-5', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'rec-6', title: 'Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '4:3' },
  { id: 'rec-7', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '4:3' },
  { id: 'rec-8', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'rec-9', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'rec-10', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '4:3' },
];

// Section 10: Top Coming Soon
export const topComingSoonData: MovieItem[] = [
  { id: 'cs-1', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '4:3' },
  { id: 'cs-2', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '4:3' },
  { id: 'cs-3', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'cs-4', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'cs-5', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'cs-6', title: 'Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '4:3' },
  { id: 'cs-7', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '4:3' },
  { id: 'cs-8', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'cs-9', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'cs-10', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '4:3' },
];

// Section 11: Ad Placement (Left Overlay)
export const adBannerLeftOverlayData: AdBannerItem = {
  id: 'ad-banner-2',
  title: 'Discover "The Ancients"',
  description: 'Unravel the mysteries of a long-lost civilization in this new epic series.',
  ctaText: 'Watch Trailer',
  imageUrl: '/banners/After_Top_Coming_Soon.png',
  imageHint: 'ancient ruins jungle',
  aspectRatio: '3.4:1.2',
  overlayPosition: 'left',
  textAlign: 'text-left',
};

// Section 12: Top News
export const topNewsData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'One Piece Live-Action Season 2 Confirmed',
    description: 'Netflix officially announces One Piece Live-Action Season 2, with production set to begin in 2024. The first season broke records as Netflix\'s most-watched show.',
    publishDate: 'March 15, 2024',
    author: 'Anime News Network',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
    imageHint: 'one piece live action',
    highlight: 'Netflix officially announces One Piece Live-Action Season 2, with production set to begin in 2024. The first season broke records as Netflix\'s most-watched show.',
    publisher: 'Anime News Network'
  },
  {
    id: 'news-2',
    title: 'Attack on Titan Final Season Part 3 Sets New Records',
    description: 'The final season of Attack on Titan breaks streaming records worldwide, becoming the most-watched anime finale in history. Fans worldwide celebrate the epic conclusion.',
    publishDate: 'March 10, 2024',
    author: 'Crunchyroll News',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
    imageHint: 'attack on titan final season',
    highlight: 'The final season of Attack on Titan breaks streaming records worldwide, becoming the most-watched anime finale in history. Fans worldwide celebrate the epic conclusion.',
    publisher: 'Crunchyroll News'
  },
  {
    id: 'news-3',
    title: 'Dragon Ball Super: New Movie Announced',
    description: 'Toei Animation announces a new Dragon Ball Super movie set to release in 2024. The film will feature a new villain and the return of fan-favorite characters.',
    publishDate: 'March 8, 2024',
    author: 'ComicBook.com',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/6/20936.jpg',
    imageHint: 'dragon ball super movie',
    highlight: 'Toei Animation announces a new Dragon Ball Super movie set to release in 2024. The film will feature a new villain and the return of fan-favorite characters.',
    publisher: 'ComicBook.com'
  },
  {
    id: 'news-4',
    title: 'Jujutsu Kaisen Season 3 Production Begins',
    description: 'MAPPA Studios confirms production has begun on Jujutsu Kaisen Season 3, focusing on the Culling Game arc. The studio promises improved animation quality.',
    publishDate: 'March 5, 2024',
    author: 'MyAnimeList News',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
    imageHint: 'jujutsu kaisen season 3',
    highlight: 'MAPPA Studios confirms production has begun on Jujutsu Kaisen Season 3, focusing on the Culling Game arc. The studio promises improved animation quality.',
    publisher: 'MyAnimeList News'
  },
  {
    id: 'news-5',
    title: 'Demon Slayer: Hashira Training Arc Premieres',
    description: 'The highly anticipated Hashira Training Arc of Demon Slayer premieres to record-breaking viewership. The new season introduces intense training sequences and character development.',
    publishDate: 'March 1, 2024',
    author: 'Anime Corner',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg',
    imageHint: 'demon slayer hashira training',
    highlight: 'The highly anticipated Hashira Training Arc of Demon Slayer premieres to record-breaking viewership. The new season introduces intense training sequences and character development.',
    publisher: 'Anime Corner'
  },
  {
    id: 'news-6',
    title: 'Studio Ghibli Announces New Film',
    description: 'Hayao Miyazaki returns with a new Studio Ghibli film, marking his first directorial work in years. The film promises to be another masterpiece from the legendary director.',
    publishDate: 'February 28, 2024',
    author: 'The Japan Times',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
    imageHint: 'studio ghibli new film',
    highlight: 'Hayao Miyazaki returns with a new Studio Ghibli film, marking his first directorial work in years. The film promises to be another masterpiece from the legendary director.',
    publisher: 'The Japan Times'
  },
  {
    id: 'news-7',
    title: 'My Hero Academia Final Season Confirmed',
    description: 'Bones Studio announces the final season of My Hero Academia, set to adapt the remaining manga chapters. The series will conclude with an epic final battle.',
    publishDate: 'February 25, 2024',
    author: 'IGN Anime',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
    imageHint: 'my hero academia final season',
    highlight: 'Bones Studio announces the final season of My Hero Academia, set to adapt the remaining manga chapters. The series will conclude with an epic final battle.',
    publisher: 'IGN Anime'
  },
  {
    id: 'news-8',
    title: 'Chainsaw Man Season 2 Production Update',
    description: 'MAPPA reveals new details about Chainsaw Man Season 2, including character designs and story arcs. The season will adapt the Reze Arc and introduce new characters.',
    publishDate: 'February 20, 2024',
    author: 'Anime News Network',
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg',
    imageHint: 'chainsaw man season 2',
    highlight: 'MAPPA reveals new details about Chainsaw Man Season 2, including character designs and story arcs. The season will adapt the Reze Arc and introduce new characters.',
    publisher: 'Anime News Network'
  }
];

// Section 13: Top Characters
export const topCharactersData: CharacterItem[] = [
  { id: 'char-1', name: 'Eren Yeager', seriesName: 'Attack on Titan', imageUrl: '/characters/eren_yeager_pfp.png', imageHint: 'eren yeager attack on titan' },
  { id: 'char-2', name: 'Light Yagami', seriesName: 'Death Note', imageUrl: '/characters/light_yagami_pfp.png', imageHint: 'light yagami death note' },
  { id: 'char-3', name: 'Edward Elric', seriesName: 'Fullmetal Alchemist', imageUrl: '/characters/edward_elric_pfp.png', imageHint: 'edward elric fullmetal alchemist' },
  { id: 'char-4', name: 'Mikasa Ackerman', seriesName: 'Attack on Titan', imageUrl: '/characters/mikasa_ackerman_pfp.png', imageHint: 'mikasa ackerman attack on titan' },
  { id: 'char-5', name: 'Levi Ackerman', seriesName: 'Attack on Titan', imageUrl: '/characters/levi_ackerman_pfp.png', imageHint: 'levi ackerman attack on titan' },
  { id: 'char-6', name: 'Roronoa Zoro', seriesName: 'One Piece', imageUrl: '/characters/roronoa_zoro_pfp.png', imageHint: 'roronoa zoro one piece' },
  { id: 'char-7', name: 'Monkey D. Luffy', seriesName: 'One Piece', imageUrl: '/characters/monkey_d._luffy_pfp.png', imageHint: 'monkey d luffy one piece' },
  { id: 'char-8', name: 'Naruto Uzumaki', seriesName: 'Naruto', imageUrl: '/characters/naruto_uzumaki_pfp.png', imageHint: 'naruto uzumaki naruto' },
  { id: 'char-9', name: 'Tanjiro Kamado', seriesName: 'Demon Slayer', imageUrl: '/characters/tanjiro_kamado_pfp.png', imageHint: 'tanjiro kamado demon slayer' },
  { id: 'char-10', name: 'Gojo Satoru', seriesName: 'Jujutsu Kaisen', imageUrl: '/characters/gojo_satoru_pfp.png', imageHint: 'gojo satoru jujutsu kaisen' },
  { id: 'char-11', name: 'Killua Zoldyck', seriesName: 'Hunter x Hunter', imageUrl: '/characters/killua_zoldyck_pfp.png', imageHint: 'killua zoldyck hunter x hunter' },
  { id: 'char-12', name: 'Saitama', seriesName: 'One Punch Man', imageUrl: '/characters/saitama_pfp.png', imageHint: 'saitama one punch man' },
  { id: 'char-13', name: 'Goku', seriesName: 'Dragon Ball', imageUrl: '/characters/goku_pfp.png', imageHint: 'goku dragon ball' },
  { id: 'char-14', name: 'Vegeta', seriesName: 'Dragon Ball', imageUrl: '/characters/vegeta_pfp.png', imageHint: 'vegeta dragon ball' },
  { id: 'char-15', name: 'Ichigo Kurosaki', seriesName: 'Bleach', imageUrl: '/characters/ichigo_kurosaki_pfp.png', imageHint: 'ichigo kurosaki bleach' },
  { id: 'char-16', name: 'Lelouch Lamperouge', seriesName: 'Code Geass', imageUrl: '/characters/lelouch_lamperouge_pfp.png', imageHint: 'lelouch lamperouge code geass' },
  { id: 'char-17', name: 'Rem', seriesName: 'Re:Zero', imageUrl: '/characters/rem_(re_zero)_pfp.png', imageHint: 'rem re zero' },
  { id: 'char-18', name: 'Astro Boy', seriesName: 'Astro Boy', imageUrl: '/characters/astro_boy_pfp.png', imageHint: 'astro boy' },
  { id: 'char-19', name: 'Natsu Dragneel', seriesName: 'Fairy Tail', imageUrl: '/characters/natsu_dragneel_pfp.png', imageHint: 'natsu dragneel fairy tail' },
  { id: 'char-20', name: 'Itachi Uchiha', seriesName: 'Naruto', imageUrl: '/characters/itachi_uchiha_pfp.png', imageHint: 'itachi uchiha naruto' }
];

export const adBannerAnimeListData: AdBannerItem = {
  id: 'ad-banner-anime-list',
  title: '',
  description: '',
  ctaText: '',
  imageUrl: '/banners/Below_anime_grid_above_pagination.png',
  imageHint: '',
  aspectRatio: '3.4:1.2',
  overlayPosition: 'left',
  textAlign: 'text-left',
};

export const tvSeriesData: MovieItem[] = [
  { id: 'tv-1', title: 'Attack on Titan', year: '2013', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg', imageHint: 'action, titans, anime', aspectRatio: '4:3' },
  { id: 'tv-2', title: 'Death Note', year: '2006', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', imageHint: 'psychological, thriller, anime', aspectRatio: '4:3' },
  { id: 'tv-3', title: 'Fullmetal Alchemist: Brotherhood', year: '2009', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tv-4', title: 'Hunter x Hunter', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tv-5', title: 'Jujutsu Kaisen', year: '2020', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', imageHint: 'action, supernatural, anime', aspectRatio: '4:3' },
  { id: 'tv-6', title: 'Kimetsu no Yaiba', year: '2019', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', imageHint: 'action, fantasy, anime', aspectRatio: '4:3' },
  { id: 'tv-7', title: 'My Hero Academia', year: '2016', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg', imageHint: 'action, superhero, anime', aspectRatio: '4:3' },
  { id: 'tv-8', title: 'Naruto', year: '2002', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tv-9', title: 'One Piece', year: '1999', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', imageHint: 'action, adventure, anime', aspectRatio: '4:3' },
  { id: 'tv-10', title: 'Steins;Gate', year: '2011', duration: 'TV Series', imageUrl: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', imageHint: 'sci-fi, thriller, anime', aspectRatio: '4:3' },
];
    
