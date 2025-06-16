'use client';

// Keep type import if used elsewhere, or remove if not. For now, it's not used.
import { useState, useEffect, useRef } from 'react';
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

const breadcrumbSegments = [
  { label: 'Home', href: '/' },
  { label: 'Series', href: '/series' },
  { label: 'Solo Leveling', href: '/series/solo-leveling' },
  { label: 'Season 1', href: '/series/solo-leveling/season-1' },
  { label: 'Episode 005', href: '#' },
];

const episodes = Array.from({ length: 100 }, (_, i) => `Ep ${String(i + 1).padStart(3, '0')}`);

const soloLevelingEpisodes = [
  { label: 'Episode 12', videoUrl: 'https://s3taku.one/watch?play=16019' },
  { label: 'Episode 11', videoUrl: 'https://s3taku.one/watch?play=16018' },
  { label: 'Episode 10', videoUrl: 'https://s3taku.one/watch?play=16017' },
  { label: 'Episode 9', videoUrl: 'https://s3taku.one/watch?play=16016' },
  { label: 'Episode 8', videoUrl: 'https://s3taku.one/watch?play=16015' },
  { label: 'Episode 7', videoUrl: 'https://s3taku.one/watch?play=16014' },
  { label: 'Episode 6', videoUrl: 'https://s3taku.one/watch?play=16002' },
  { label: 'Episode 5', videoUrl: 'https://s3taku.one/watch?play=16001' },
  { label: 'Episode 4', videoUrl: 'https://s3taku.one/watch?play=16000' },
  { label: 'Episode 3', videoUrl: 'https://s3taku.one/watch?play=15999' },
  { label: 'Episode 2', videoUrl: 'https://s3taku.one/watch?play=15998' },
  { label: 'Episode 1', videoUrl: 'https://s3taku.one/watch?play=15969' },
];

// Add video sources
const videoSources = [
  { label: 'Source 1', url: 'https://s3taku.one/watch?play=16019' },
  { label: 'Source 2', url: 'https://example.com/source2' },
  { label: 'Source 3', url: 'https://example.com/source3' },
];

const ANIME_DETAILS = {
  poster: 'https://images.justwatch.com/poster/322369273/s718/the-leveling-of-solo-leveling.jpg',
  title: 'Solo Leveling',
  description: `E-class hunter Jinwoo Sung is the weakest of them all. Looked down on by everyone, he has no money, no abilities to speak of, and no other job prospects. So when his party finds a hidden dungeon, he's determined to use this chance to change his life for the better... but the opportunity he finds is a bit different from what he had in mind!`,
  altTitle: 'Na Honjaman Level-Up, Ore dake Level Up na Ken',
  type: 'TV',
  totalEpisodes: 12,
  studio: 'A-1 Pictures',
  year: 2024,
  source: 'Yen Press',
  rating: 4.4,
  tags: [
    'Action',
    'Adventure',
    'Fantasy',
    'Dungeon',
    'Game Elements',
    'Magic',
    'Monsters',
    'Swordplay',
    'Urban Fantasy',
    'Weak to Strong'
  ],
};

const RECOMMENDATIONS_PER_PAGE = 14;

// Add a blank ad banner config for upload
const blankAdBanner = {
  id: 'ad-banner-player-page',
  title: '',
  description: '',
  ctaText: '',
  imageUrl: '/banners/naruto_banner.png',
  imageHint: '',
  aspectRatio: '3.4:1.2' as '3.4:1.2',
  overlayPosition: 'left' as 'left',
  textAlign: 'text-left' as 'text-left',
};

export default function PlayerPage() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [animePerPage, setAnimePerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentEpisode, setCurrentEpisode] = useState(soloLevelingEpisodes[0]);
  const [currentSource, setCurrentSource] = useState(videoSources[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [recPage, setRecPage] = useState(1);
  const [recPerPage, setRecPerPage] = useState(RECOMMENDATIONS_PER_PAGE);
  const totalRecPages = Math.ceil(MOCK_ANIME.length / recPerPage);
  const paginatedRecommendations = MOCK_ANIME.slice((recPage - 1) * recPerPage, recPage * recPerPage);
  const [showPlayer, setShowPlayer] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

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

  // Play/Pause handler
  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Seek handlers
  const handleBackward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
  };
  const handleForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 10);
  };
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };
  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const percent = parseFloat(e.target.value);
    const newTime = (percent / 100) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  // When episode changes, reset playback
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentEpisode]);

  // Format time helper
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    document.title = 'Content Library - StreamVerse';
  }, []);

  // Add episode navigation handlers
  const handlePreviousEpisode = () => {
    const currentIndex = soloLevelingEpisodes.findIndex(ep => ep.label === currentEpisode.label);
    if (currentIndex < soloLevelingEpisodes.length - 1) {
      setCurrentEpisode(soloLevelingEpisodes[currentIndex + 1]);
    }
  };

  const handleNextEpisode = () => {
    const currentIndex = soloLevelingEpisodes.findIndex(ep => ep.label === currentEpisode.label);
    if (currentIndex > 0) {
      setCurrentEpisode(soloLevelingEpisodes[currentIndex - 1]);
    }
  };

  const handleShowPlayer = () => {
    setShowPlayer(true);
    setTimeout(() => {
      playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Dynamic Breadcrumb - always visible at the top */}
        <div className="flex flex-col items-start mb-4">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">Solo Leveling</h1>
          <nav className="text-sm text-muted-foreground mb-2 flex flex-wrap gap-1">
            {breadcrumbSegments.map((seg, idx) => (
              <span key={seg.label} className="flex items-center">
                {idx > 0 && <span className="mx-1">/</span>}
                {seg.href !== '#' ? <a href={seg.href} className="hover:text-primary">{seg.label}</a> : <span>{seg.label}</span>}
              </span>
            ))}
          </nav>
        </div>
        {/* Slide-down Media Player Section below title/breadcrumb */}
        <div
          ref={playerRef}
          className={`transition-all duration-700 ease-in-out overflow-hidden ${showPlayer ? 'max-h-[2000px] opacity-100 mt-0' : 'max-h-0 opacity-0 mt-[-32px]'}`}
        >
          {/* Main Player Section */}
          <div className="flex flex-col gap-4">
            {/* Glass Media Player */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-md">
              {/* Iframe Video Player */}
              <iframe
                key={currentEpisode.videoUrl}
                src={currentEpisode.videoUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen"
                title={currentEpisode.label}
              />
            </div>
            {/* Episode Navigation Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#18182a]/60 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={handlePreviousEpisode}
                  disabled={soloLevelingEpisodes.findIndex(ep => ep.label === currentEpisode.label) === soloLevelingEpisodes.length - 1}
                  className="bg-muted hover:bg-primary hover:text-primary-foreground"
                >
                  Previous Episode
                </Button>
                <Button
                  variant="outline"
                  onClick={handleNextEpisode}
                  disabled={soloLevelingEpisodes.findIndex(ep => ep.label === currentEpisode.label) === 0}
                  className="bg-muted hover:bg-primary hover:text-primary-foreground"
                >
                  Next Episode
                </Button>
              </div>
              <div className="flex items-center gap-4">
                {/* Episode Select */}
                <Select value={currentEpisode.label} onValueChange={(value) => {
                  const episode = soloLevelingEpisodes.find(ep => ep.label === value);
                  if (episode) setCurrentEpisode(episode);
                }}>
                  <SelectTrigger className="w-[180px] bg-muted text-muted-foreground">
                    <SelectValue placeholder="Select Episode" />
                  </SelectTrigger>
                  <SelectContent>
                    {soloLevelingEpisodes.map((episode) => (
                      <SelectItem key={episode.label} value={episode.label}>
                        {episode.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* Video Source Select */}
                <Select value={currentSource.label} onValueChange={(value) => {
                  const source = videoSources.find(s => s.label === value);
                  if (source) setCurrentSource(source);
                }}>
                  <SelectTrigger className="w-[180px] bg-muted text-muted-foreground">
                    <SelectValue placeholder="Select Source" />
                  </SelectTrigger>
                  <SelectContent>
                    {videoSources.map((source) => (
                      <SelectItem key={source.label} value={source.label}>
                        {source.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        {/* Anime Details Section (below player, above recommendations) */}
        <div className="flex flex-col md:flex-row gap-8 mt-10 mb-10 items-start">
          {/* Poster */}
          <div className="w-[480px] h-[640px] flex-shrink-0">
            <img 
              src={ANIME_DETAILS.poster} 
              alt="Solo Leveling Poster" 
              className="w-full h-full object-cover rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.6)] transition-shadow duration-300"
            />
          </div>
          {/* Details */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold mb-4">{ANIME_DETAILS.title}</h1>
            <p className="mb-6 text-gray-300 leading-relaxed">{ANIME_DETAILS.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <div><span className="text-gray-400">Alt Title:</span> <span className="text-white">{ANIME_DETAILS.altTitle}</span></div>
                <div><span className="text-gray-400">Type:</span> <span className="text-white">{ANIME_DETAILS.type}</span></div>
                <div><span className="text-gray-400">Total Episodes:</span> <span className="text-white">{ANIME_DETAILS.totalEpisodes}</span></div>
                <div><span className="text-gray-400">Studio:</span> <span className="text-white">{ANIME_DETAILS.studio}</span></div>
              </div>
              <div className="space-y-2">
                <div><span className="text-gray-400">Year:</span> <span className="text-white">{ANIME_DETAILS.year}</span></div>
                <div><span className="text-gray-400">Source:</span> <span className="text-white">{ANIME_DETAILS.source}</span></div>
                <div><span className="text-gray-400">Rating:</span> <span className="text-yellow-400 font-bold">{ANIME_DETAILS.rating} <span className="inline-block align-middle">★</span></span></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {ANIME_DETAILS.tags.map((tag, i) => (
                <button
                  key={i}
                  className="px-4 py-2 rounded-lg bg-[#23233a] text-white hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm font-medium"
                >
                  {tag}
                </button>
              ))}
            </div>
            {/* Play Now & Hide Player Buttons - right aligned, always visible, nav style */}
            <div className="w-full flex flex-row gap-4 justify-end items-center">
              <button
                className={`w-full max-w-[220px] py-4 rounded-2xl text-2xl font-extrabold shadow-lg transition-colors duration-200 border-2 border-yellow-400
                  ${showPlayer ? 'bg-transparent text-yellow-400 hover:bg-yellow-100/10' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}
                onClick={handleShowPlayer}
                style={{ marginTop: '16px' }}
                aria-pressed={!showPlayer}
              >
                Play Now
              </button>
              <button
                className={`w-full max-w-[220px] py-4 rounded-2xl text-2xl font-extrabold shadow-lg transition-colors duration-200 border-2 border-yellow-400
                  ${showPlayer ? 'bg-yellow-400 text-black hover:bg-yellow-300' : 'bg-transparent text-yellow-400 hover:bg-yellow-100/10'}`}
                onClick={() => setShowPlayer(false)}
                style={{ marginTop: '16px' }}
                aria-pressed={showPlayer}
              >
                Hide Player
              </button>
            </div>
          </div>
        </div>
        {/* You May Also Like Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
            {paginatedRecommendations.map((anime, idx) => (
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
          {/* Full-bleed Ad Banner (no left/right margin/padding) - now above pagination */}
          <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mt-10 mb-2">
            <AdBannerSection ad={blankAdBanner} />
          </div>
          {/* Anime per Page & Pagination (Anime List style) */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <div>
              <label htmlFor="recPerPage" className="mr-2 text-sm font-body text-muted-foreground">Anime per Page</label>
              <select id="recPerPage" value={recPerPage} onChange={e => { setRecPerPage(Number(e.target.value)); setRecPage(1); }} className="bg-muted text-foreground rounded px-2 py-1 font-body text-sm border border-border">
                <option value={14}>14</option>
                <option value={28}>28</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button disabled={recPage === 1} onClick={() => setRecPage(recPage - 1)} className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50">Previous</button>
              {(() => {
                const pages = [];
                const maxVisiblePages = 5;
                let startPage = Math.max(1, recPage - Math.floor(maxVisiblePages / 2));
                let endPage = Math.min(totalRecPages, startPage + maxVisiblePages - 1);
                if (endPage - startPage + 1 < maxVisiblePages) {
                  startPage = Math.max(1, endPage - maxVisiblePages + 1);
                }
                if (startPage > 1) {
                  pages.push(
                    <button key={1} onClick={() => setRecPage(1)} className="px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition">1</button>
                  );
                  if (startPage > 2) {
                    pages.push(<span key="start-ellipsis" className="text-muted-foreground font-body text-sm">...</span>);
                  }
                }
                for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                    <button key={i} onClick={() => setRecPage(i)} className={`px-3 py-1 rounded font-body text-sm ${recPage === i ? 'bg-primary text-primary-foreground font-semibold' : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition'}`}>{i}</button>
                  );
                }
                if (endPage < totalRecPages) {
                  if (endPage < totalRecPages - 1) {
                    pages.push(<span key="end-ellipsis" className="text-muted-foreground font-body text-sm">...</span>);
                  }
                  pages.push(
                    <button key={totalRecPages} onClick={() => setRecPage(totalRecPages)} className="px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition">{totalRecPages}</button>
                  );
                }
                return pages;
              })()}
              <button disabled={recPage === totalRecPages} onClick={() => setRecPage(recPage + 1)} className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50">Next</button>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}


