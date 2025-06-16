'use client';

// Keep type import if used elsewhere, or remove if not. For now, it's not used.
import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import AdBannerSection from '@/components/sections/ad-banner-section';
import { adBannerAnimeListData } from '@/data/mock-data';

const ALPHABET = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
const MOCK_ANIME = [
  {
    title: "Attack on Titan",
    poster: "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
    genres: ['Action', 'Dark Fantasy'],
    letter: 'A',
  },
  {
    title: "Death Note",
    poster: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    genres: ['Psychological', 'Thriller'],
    letter: 'D',
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    poster: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    genres: ['Action', 'Adventure'],
    letter: 'F',
  },
  {
    title: "Hunter x Hunter",
    poster: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    genres: ['Action', 'Adventure'],
    letter: 'H',
  },
  {
    title: "Jujutsu Kaisen",
    poster: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    genres: ['Action', 'Supernatural'],
    letter: 'J',
  },
  {
    title: "Kimetsu no Yaiba",
    poster: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
    genres: ['Action', 'Fantasy'],
    letter: 'K',
  },
  {
    title: "My Hero Academia",
    poster: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    genres: ['Action', 'Superhero'],
    letter: 'M',
  },
  {
    title: "Naruto",
    poster: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    genres: ['Action', 'Adventure'],
    letter: 'N',
  },
  {
    title: "One Piece",
    poster: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    genres: ['Action', 'Adventure'],
    letter: 'O',
  },
  {
    title: "Steins;Gate",
    poster: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
    genres: ['Sci-Fi', 'Thriller'],
    letter: 'S',
  },
  {
    title: "Tokyo Ghoul",
    poster: "https://cdn.myanimelist.net/images/anime/5/64449.jpg",
    genres: ['Action', 'Horror'],
    letter: 'T',
  },
  {
    title: "Violet Evergarden",
    poster: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
    genres: ['Drama', 'Slice of Life'],
    letter: 'V',
  },
  {
    title: "Your Name",
    poster: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
    genres: ['Drama', 'Romance'],
    letter: 'Y',
  },
  {
    title: "Black Clover",
    poster: "https://cdn.myanimelist.net/images/anime/2/88336.jpg",
    genres: ['Action', 'Fantasy'],
    letter: 'B',
  },
  {
    title: "Chainsaw Man",
    poster: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    genres: ['Action', 'Horror'],
    letter: 'C',
  },
  {
    title: "Eighty-Six",
    poster: "https://cdn.myanimelist.net/images/anime/1813/113269.jpg",
    genres: ['Action', 'Drama'],
    letter: 'E',
  },
  {
    title: "Gintama",
    poster: "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
    genres: ['Action', 'Comedy'],
    letter: 'G',
  },
  {
    title: "Inuyasha",
    poster: "https://cdn.myanimelist.net/images/anime/3/20797.jpg",
    genres: ['Action', 'Adventure'],
    letter: 'I',
  },
  {
    title: "Love is War",
    poster: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    genres: ['Comedy', 'Romance'],
    letter: 'L',
  },
  {
    title: "Parasyte",
    poster: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
    genres: ['Action', 'Horror'],
    letter: 'P',
  },
  {
    title: "Re:Zero",
    poster: "https://cdn.myanimelist.net/images/anime/11/79410.jpg",
    genres: ['Drama', 'Fantasy'],
    letter: 'R',
  },
  {
    title: "Sword Art Online",
    poster: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
    genres: ['Action', 'Adventure'],
    letter: 'S',
  },
  {
    title: "The Promised Neverland",
    poster: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
    genres: ['Horror', 'Mystery'],
    letter: 'T',
  },
  {
    title: "Uzumaki",
    poster: "https://shikimori.one/system/animes/original/40748.jpg",
    genres: ['Horror', 'Psychological'],
    letter: 'U',
  },
  {
    title: "Weathering With You",
    poster: "https://cdn.myanimelist.net/images/anime/1704/102576.jpg",
    genres: ['Drama', 'Fantasy'],
    letter: 'W',
  },
  {
    title: "XxxHolic",
    poster: "https://cdn.myanimelist.net/images/anime/2/75210.jpg",
    genres: ['Mystery', 'Supernatural'],
    letter: 'X',
  },
  {
    title: "Zombie Land Saga",
    poster: "https://cdn.myanimelist.net/images/anime/1286/93627.jpg",
    genres: ['Comedy', 'Supernatural'],
    letter: 'Z',
  }
];

export default function AnimeListPage() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [animePerPage, setAnimePerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter logic
  const filteredAnime = selectedLetter
    ? MOCK_ANIME.filter(anime => anime.letter === selectedLetter)
    : MOCK_ANIME;

  // Pagination logic
  const totalPages = Math.ceil(filteredAnime.length / animePerPage);
  const paginatedAnime = filteredAnime.slice((currentPage - 1) * animePerPage, currentPage * animePerPage);

  // Handlers
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };
  const handleResetFilters = () => {
    setSelectedLetter(null);
    setCurrentPage(1);
  };
  const handleAnimePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnimePerPage(Number(e.target.value));
    setCurrentPage(1);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    document.title = 'Content Library - StreamVerse';
  }, []);

  // Placeholder data - in a real app, this would be dynamic
  const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Fantasy', 'Romance', 'Horror', 'Slice of Life'];
  const years = ['2024', '2023', '2022', '2021', '2020', 'Older'];
  const ratings = ['5 Stars', '4 Stars & Up', '3 Stars & Up', 'Any'];
  const languages = ['English', 'Japanese', 'Spanish', 'Korean', 'Chinese'];

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">Anime List</h1>
        <div className="text-sm text-muted-foreground mb-6">Home / Anime List</div>
        <div className="flex gap-8 items-stretch min-h-[700px]">
          {/* Right Main Content */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2 mb-6">
              {ALPHABET.map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className={`px-3 py-1 rounded-md font-body text-sm transition ${selectedLetter === letter ? 'bg-primary text-primary-foreground font-semibold' : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'}`}
                >
                  {letter}
                </button>
              ))}
              <button onClick={handleResetFilters} className="px-3 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition font-body text-sm">others</button>
              <button onClick={handleResetFilters} className="ml-auto px-3 py-1 rounded-md bg-primary text-primary-foreground font-semibold font-body text-sm">Reset All Filter</button>
            </div>
            {/* Anime Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
              {paginatedAnime.map((anime, idx) => (
                <div key={anime.title + idx} className="group/moviecard block w-full shrink-0">
                  <div className="overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out flex flex-col h-full rounded-lg">
                    <div className="relative w-full overflow-hidden aspect-[3/4]">
                      <img 
                        src={anime.poster} 
                        alt={anime.title} 
                        className="w-full h-full object-cover group-hover/moviecard:scale-120 transition-transform duration-300 ease-in-out"
                      />
              </div>
                    <div className="p-2 sm:p-3 flex flex-col justify-start overflow-hidden h-[60px] sm:h-[72px]">
                      <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover/moviecard:text-primary transition-colors line-clamp-2 mb-0.5">
                        {anime.title}
                      </h3>
                      <p className="text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors mt-0.5 line-clamp-1">
                        {anime.genres.join(' • ')}
                      </p>
              </div>
              </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {/* Full-bleed Ad Panel (no left/right margin/padding) */}
        <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
          <AdBannerSection ad={adBannerAnimeListData} />
        </div>
        {/* Pagination & Page Size */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
          <div>
            <label htmlFor="animePerPage" className="mr-2 text-sm font-body text-muted-foreground">Anime per Page</label>
            <select id="animePerPage" value={animePerPage} onChange={handleAnimePerPageChange} className="bg-muted text-foreground rounded px-2 py-1 font-body text-sm border border-border">
              <option value={14}>14</option>
              <option value={28}>28</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50">Previous</button>
            {(() => {
              const pages = [];
              const maxVisiblePages = 5;
              let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
              let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
              
              // Adjust start page if we're near the end
              if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
              }

              // Add first page and ellipsis if needed
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

              // Add page numbers
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

              // Add ellipsis and last page if needed
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
            <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50">Next</button>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}

// It's generally better to define metadata in a layout.tsx or a dedicated metadata export if the page isn't purely client-side.
// For a page with 'use client', if you need dynamic metadata based on client-side state, you'd update document.title directly in useEffect.
// If static, it can be like this, but Next.js might recommend placing it in a higher-level component or specific export.
// The 'metadata' export below was removed to fix the client component error.
// export const metadata: Metadata = { 
//   title: 'Content Library - StreamVerse',
//   description: 'Browse all anime, movies, and series available on StreamVerse. Filter and sort to find your next favorite.',
// };
