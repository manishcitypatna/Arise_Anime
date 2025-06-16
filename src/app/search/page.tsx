'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AdBannerSection from '@/components/sections/ad-banner-section';
import { adBannerAnimeListData, adBannerSearchData } from '@/data/mock-data';
import { Search } from 'lucide-react';

const MOCK_ANIME = [
  {
    title: "Solo Leveling Season 2: Arise from the Shadow",
    altTitle: "Na Honjaman Level-Up Season 2: Arise from the Shadow, Ore dake Level Up na Ken Season 2: Arise from the Shadow",
    type: "TV",
    studio: "A-1 Pictures",
    year: "2025",
    source: "NA",
    rating: 4.6,
    synopsis: "The second season of Solo Leveling.",
    tags: ["Action", "Adventure", "Fantasy", "Contemporary Fantasy", "Dungeon", "Game Elements", "Magic", "Monsters", "Swordplay", "Urban Fantasy", "Weak to Strong", "Based on a Webtoon"],
    poster: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
    episodes: 13
  },
  {
    title: "Jujutsu Kaisen",
    altTitle: "",
    type: "TV",
    studio: "MAPPA",
    year: "2020 - 2021",
    source: "Viz",
    rating: 4.5,
    synopsis: "Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they'll unleash when they break the seal…",
    tags: ["Action", "Horror", "Shounen", "Body Sharing", "Contemporary Fantasy", "Curse", "Exorcists", "Monsters", "School Life", "Supernatural", "Urban Fantasy", "Based on a Manga"],
    poster: "/anime-posters/jujutsu-kaisen.jpg",
    episodes: 24
  },
  {
    title: "Hunter x Hunter (2011)",
    altTitle: "",
    type: "TV",
    studio: "MADHOUSE",
    year: "2011 - 2014",
    source: "NA",
    rating: 4.5,
    synopsis: "Drawn to the mystique of the unknown, Hunters travel the world in search of terrifying creatures, incredible riches, and unexplored lands. Gon Freecss is a naive-yet-determined young boy who aspires to join the ranks of these individuals, in order to find his missing father Ging - a master of the profession himself. To reach his goal, he partakes in the formidable Hunter Exam, a series of tests that push the participants to their physical and mental limits, with a Hunter License as the prize. During the exam Gon befriends vengeful Kurapika, doctor-to-be Leorio, and skilled assassin Killua, who have entered for their own reasons. But with the sinister Hisoka standing in their way, will Gon and his friends be able to succeed in obtaining their reward, or even escaping with their lives?",
    tags: ["Action", "Adventure", "Drama", "Fantasy", "Shounen", "Child Protagonists", "Monsters", "Superpowers", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-2011-1-190x285.jpg?t=1625896160",
    episodes: 148
  },
  {
    title: "Jujutsu Kaisen Season 2",
    altTitle: "",
    type: "TV",
    studio: "MAPPA",
    year: "2023",
    source: "NA",
    rating: 4.5,
    synopsis: "The second season of Jujutsu Kaisen.",
    tags: ["Action", "Horror", "Shounen", "Body Sharing", "Curse", "Exorcists", "Monsters", "School Life", "Supernatural", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-season-2-1-285x400.webp?t=1727110759",
    episodes: 23
  },
  {
    title: "Jujutsu Kaisen 0: The Movie",
    altTitle: "Jujutsu Kaisen 0",
    type: "Movie",
    studio: "MAPPA",
    year: "2021",
    source: "Viz",
    rating: 4.4,
    synopsis: "The one-shot pilot of the supernatural exorcist adventure Jujutsu Kaisen! The story takes place a one year before Itadori's time, focusing on his upperclassmen at Jujutsu High--Maki, Panda, Toge and Yuta Okkotsu (the MC). In Jujutsu Kaisen, we don't see Yuta, but other characters often make reference to him and the incidents that occur in this volume. Yuta's been brought in to Jujutsu High by Satoru Gojo because he's been cursed by his childhood friend, Rika. But this is no ordinary curse as she's classified Special Grade. And because of her overwhelming strengh, Yuta doesn't know how to control or use her. Meanwhile, Suguru Geto is out to get Yuta Okkotsu, specifically targeting Rika to add to his own collection of cursed spirits he controls, setting up a showdown with his best friend-turned-enemy, Gojo",
    tags: ["Action", "Shounen", "Contemporary Fantasy", "Curse", "Exorcists", "Supernatural", "Urban Fantasy", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-0-the-movie-1-285x404.jpg?t=1727108413",
    episodes: 1
  },
  {
    title: "Solo Leveling",
    altTitle: "Na Honjaman Level-Up, Ore dake Level Up na Ken",
    type: "TV",
    studio: "A-1 Pictures",
    year: "2024",
    source: "Yen Press",
    rating: 4.4,
    synopsis: "E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he's determined to use this chance to change his life for the better... but the opportunity he finds is a bit different from what he had in mind!",
    tags: ["Action", "Adventure", "Fantasy", "Contemporary Fantasy", "Dungeon", "Game Elements", "Magic", "Monsters", "Swordplay", "Urban Fantasy", "Weak to Strong", "Based on a Webtoon"],
    poster: "https://cdn.anime-planet.com/anime/primary/solo-leveling-1-285x398.webp?t=1694330795",
    episodes: 12
  },
  {
    title: "Solo Leveling: Reawakening",
    altTitle: "Na Honjaman Level-Up -ReAwakening-, Ore dake Level Up na Ken -ReAwakening-",
    type: "Movie",
    studio: "A-1 Pictures",
    year: "2024",
    source: "NA",
    rating: 4.3,
    synopsis: "A recap of the first season of Solo Leveling including the first two episodes of the second season.",
    tags: ["Action", "Adventure", "Fantasy", "Contemporary Fantasy", "Dungeon", "Magic", "Monsters", "Recap", "Swordplay", "Urban Fantasy", "Weak to Strong", "Based on a Webtoon"],
    poster: "https://cdn.anime-planet.com/anime/primary/solo-leveling-reawakening-1-285x399.webp?t=1727698510",
    episodes: 1
  },
  {
    title: "Naruto Shippuden",
    altTitle: "",
    type: "TV",
    studio: "Pierrot",
    year: "2007 - 2017",
    source: "NA",
    rating: 4.2,
    synopsis: "Two and a half years have passed since the end of Naruto's old adventures. He has trained hard with Jiraiya-sama and has returned to Konoha to reunite with his friends; but Akatsuki, the organization that threatened Naruto years before, is on the move again and this time Naruto is not the only one in danger. With the powerful Akatsuki organization looming ahead of him, Sasuke still missing, and the struggle with the beast hidden inside him a continuous battle, will Naruto's hard-earned improvements be enough? Join Naruto, Sakura, new friends and the rest of the old gang as the action heats up with new techniques and stronger enemies.",
    tags: ["Action", "Drama", "Fantasy", "Shounen", "Hand to Hand Combat", "Ninja", "Revenge", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/naruto-shippuden-1-190x285.jpg?t=1625885757",
    episodes: 500
  },
  {
    title: "Hunter x Hunter OVA 3: Greed Island Final",
    altTitle: "",
    type: "OVA",
    studio: "Nippon Animation",
    year: "2004",
    source: "NA",
    rating: 4.2,
    synopsis: "Gon and Killua continue their training with Biscuit as the Mad Bomber wreaks havoc upon the other players in Greed Island. As their strength increases, Gon and Killua also start searching for the hundred cards needed to complete the game. As their number of cards increases they must now prepare to face off against Razor, the leader of the 14 Devils, and the Mad Bomber himself.",
    tags: ["Action", "Adventure", "Shounen", "Child Protagonists", "Island", "Martial Arts", "Superpowers", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-ova-3-greed-island-final-1-190x278.jpg?t=1625885540",
    episodes: 14
  },
  {
    title: "Dragon Ball Super Movie: Broly",
    altTitle: "",
    type: "Movie",
    studio: "Toei Animation",
    year: "2018",
    source: "Funimation",
    rating: 4.2,
    synopsis: "Knowing that there are increasingly powerful forces in the universe that he has yet to encounter, Goku spends all of his time training to achieve even greater strength. But, one fateful day a mysterious new Saiyan appears before Goku and Vegeta: Broly. How can a Saiyan—a member of the proud warrior race that was completely annihilated after the destruction of Planet Vegeta—appear here on Earth? With Frieza's return from hell, a fierce battle awaits the three mighty Saiyans who have followed completely different destinies.",
    tags: ["Action", "Shounen", "Aliens", "Hand to Hand Combat", "Martial Arts", "Non-Human Protagonists", "Superpowers", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/dragon-ball-super-movie-broly-1-190x285.jpg?t=1625897957",
    episodes: 1
  },
  {
    title: "Hunter x Hunter",
    altTitle: "",
    type: "TV",
    studio: "Nippon Animation",
    year: "1999 - 2001",
    source: "NA",
    rating: 4.2,
    synopsis: "Drawn to the mystique of the unknown, Hunters travel the world in search of terrifying creatures, incredible riches, and unexplored lands. Gon Freecss is a naive-yet-determined young boy who aspires to join the ranks of these individuals, in order to find his missing father Ging - a master of the profession himself. To reach his goal, he partakes in the formidable Hunter Exam, a series of tests that push the participants to their physical and mental limits, with a Hunter License as the prize. During the exam Gon befriends vengeful Kurapika, doctor-to-be Leorio, and skilled assassin Killua, who have entered for their own reasons. But with the sinister Hisoka standing in their way, will Gon and his friends be able to succeed in obtaining their reward, or even escaping with their lives?",
    tags: ["Action", "Adventure", "Fantasy", "Shounen", "Child Protagonists", "Martial Arts", "Superpowers", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-1-190x295.jpg?t=1625885336",
    episodes: 62
  },
  {
    title: "Hunter x Hunter OVA 2: Greed Island",
    altTitle: "",
    type: "OVA",
    studio: "Nippon Animation",
    year: "2003",
    source: "NA",
    rating: 4.2,
    synopsis: "Gon and Killua finally have a means of which to enter Greed Island, a game designed just for Hunters. Are their Nen abilities strong enough to help them survive in this new world? They must now train and grow stronger to uncover their secret abilities. With a helping hand from Biscuit, they will be able to continue their quest to unravel the mystery behind Ging Freecss and this 'almost too real' hunter game.",
    tags: ["Action", "Adventure", "Shounen", "Child Protagonists", "Island", "Martial Arts", "Superpowers", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-ova-2-greed-island-1-190x270.jpg?t=1625885342",
    episodes: 8
  },
  {
    title: "Hunter x Hunter OVA",
    altTitle: "",
    type: "OVA",
    studio: "Nippon Animation",
    year: "2002",
    source: "NA",
    rating: 4.2,
    synopsis: "The time for the secret Yorkshire auction is near, and Kurapika's plans of revenge are at hand. By night, Gon, Killua, and Leorio must fight alongside him to protect the auction pieces and defeat the Spiders. By day, Gon and Killua must raise money for their ultra rare copy of Greed Island, a game designed only for hunters. Will conflicting motives ruin their chances to protect the auction?",
    tags: ["Action", "Adventure", "Shounen", "Martial Arts", "Superpowers", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/hunter-x-hunter-ova-1-190x246.jpg?t=1625885342",
    episodes: 8
  },
  {
    title: "Jujutsu Kaisen PVs",
    altTitle: "",
    type: "Web",
    studio: "2018",
    year: "2018",
    source: "NA",
    rating: 4.1,
    synopsis: "This entry currently doesn't have a synopsis. Check back soon!",
    tags: ["Promotional", "Short Episodes", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/jujutsu-kaisen-pvs-1-285x399.webp?t=1727110805",
    episodes: 3
  },
  {
    title: "Naruto Shippuden Movie 6: Road to Ninja",
    altTitle: "",
    type: "Movie",
    studio: "Pierrot",
    year: "2012",
    source: "NA",
    rating: 4.0,
    synopsis: "Naruto the orphan has always wanted a family, while recently Sakura has wished her overbearing parents would give her some space. So when the villainous Madara sneaks into the village and banishes them to a parallel world, the pair sees their desires come true in a way they never thought possible! In this alternate Konoha, Shino hates bugs, Hinata is an aggressive hot-head, and Sasuke is a laid-back playboy - not to mention Naruto and Sakura's lives are switched! His parents are suddenly alive and well, and she's the orphan turned village hero. After a short time, Sakura sees the folly of her ways and is ready to try to find a way to return; but now that Naruto has everything he's ever wanted, he'll have to decide if perception really can trump reality.",
    tags: ["Action", "Fantasy", "Shounen", "Ninja", "Person in a Strange World", "Based on a Manga"],
    poster: "https://cdn.anime-planet.com/anime/primary/naruto-shippuden-movie-6-road-to-ninja-1-190x266.jpg?t=1625896358",
    episodes: 1
  }
];

const PAGE_SIZES = [14, 28, 42];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [pageSize, setPageSize] = useState(14);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(MOCK_ANIME);

  useEffect(() => {
    // Filter anime based on search query
    const filteredResults = MOCK_ANIME.filter(anime => 
      anime.title.toLowerCase().includes(query.toLowerCase()) ||
      anime.altTitle?.toLowerCase().includes(query.toLowerCase()) ||
      anime.synopsis?.toLowerCase().includes(query.toLowerCase()) ||
      anime.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to first page when search changes
  }, [query]);

  // Pagination logic
  const totalResults = searchResults.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  const paginatedResults = searchResults.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (value: string) => {
    setPageSize(Number(value));
    setCurrentPage(1);
  };

  useEffect(() => {
    document.title = 'Search Results - StreamVerse';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">Search Results</h1>
        <div className="text-sm text-muted-foreground mb-6">Home / Search</div>

        {/* Results Count */}
        <div className="mb-6">
          <span className="text-muted-foreground">
            Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalResults)} of {totalResults} results
          </span>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {paginatedResults.map((anime, idx) => (
            <div key={anime.title + idx} className="group/moviecard block w-full shrink-0">
              <div className="overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out flex flex-col h-full rounded-lg">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-800">
                  <Image
                    src={anime.poster || '/anime-posters/placeholder.svg'}
                    alt={anime.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 4}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/anime-posters/placeholder.svg';
                      target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                <div className="p-2 sm:p-3 flex flex-col justify-start overflow-hidden h-[60px] sm:h-[72px]">
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover/moviecard:text-primary transition-colors line-clamp-2 mb-0.5">
                    {anime.title}
                  </h3>
                  <p className="text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors mt-0.5 line-clamp-1">
                    {anime.tags?.slice(0, 3).join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-bleed Ad Panel */}
        <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
          <AdBannerSection ad={adBannerSearchData} />
        </div>

        {/* Pagination & Page Size */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
          <div>
            <label htmlFor="pageSize" className="mr-2 text-sm font-body text-muted-foreground">Results per Page</label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => handlePageSizeChange(e.target.value)}
              className="bg-muted text-foreground rounded px-2 py-1 font-body text-sm border border-border"
            >
              <option value={14}>14</option>
              <option value={28}>28</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50"
            >
              Previous
            </button>
            {(() => {
              const pages = [];
              const maxVisiblePages = 5;
              let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
              let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
              
              if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
              }

              if (startPage > 1) {
                pages.push(
                  <button
                    key={1}
                    onClick={() => handlePageChange(1)}
                    className="px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition"
                  >
                    1
                  </button>
                );
                if (startPage > 2) {
                  pages.push(<span key="start-ellipsis" className="text-muted-foreground font-body text-sm">...</span>);
                }
              }

              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 rounded font-body text-sm ${currentPage === i ? 'bg-primary text-primary-foreground font-semibold' : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition'}`}
                  >
                    {i}
                  </button>
                );
              }

              if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                  pages.push(<span key="end-ellipsis" className="text-muted-foreground font-body text-sm">...</span>);
                }
                pages.push(
                  <button
                    key={totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition"
                  >
                    {totalPages}
                  </button>
                );
              }

              return pages;
            })()}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
} 