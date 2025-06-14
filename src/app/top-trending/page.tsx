'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const GENRES = [
  'Top Trending',
  ...[
    'Adventure',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'History',
    'Horror',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller',
    'Action',
  ].sort()
];
const YEARS = [2025, 2024, 2023, 2022, 2021, 2020];
const PAGE_SIZES = [14, 28, 42];
const SORT_OPTIONS = ['Name', 'Release Date', 'Ratings'];

// Placeholder top trending data (reuse movie data for now)
const placeholderTrending = [
  {
    id: '1',
    title: 'Trending Anime 1',
    genres: ['Top Trending', 'Action'],
    year: 2023,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
  },
  {
    id: '2',
    title: 'Trending Anime 2',
    genres: ['Top Trending', 'Adventure'],
    year: 2022,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
  },
  // ...add more as needed
];

export default function TopTrendingPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('Top Trending');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('Name');
  const [typeFilter, setTypeFilter] = useState<'all' | 'movies' | 'series'>('all');
  const [pageSize, setPageSize] = useState<number>(PAGE_SIZES[0]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = 'Top Trending - Arise Anime';
    setTypeFilter('all');
    setSelectedGenre('Top Trending');
    setSelectedYear(null);
    setSortBy('Name');
    setCurrentPage(1);
  }, []);

  // Filtering logic
  let filteredTrending = placeholderTrending;
  if (selectedGenre) {
    filteredTrending = filteredTrending.filter((item) => item.genres.includes(selectedGenre));
  }
  if (selectedYear) {
    filteredTrending = filteredTrending.filter((item) => item.year === selectedYear);
  }
  if (sortBy === 'Name') {
    filteredTrending = [...filteredTrending].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'Release Date') {
    filteredTrending = [...filteredTrending].sort((a, b) => b.year - a.year);
  }

  // Pagination logic
  const totalResults = filteredTrending.length;
  const totalPages = Math.ceil(totalResults / pageSize);
  const paginatedTrending = filteredTrending.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleReset = () => {
    setSelectedGenre('Top Trending');
    setSelectedYear(null);
    setSortBy('Name');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8 flex gap-4">
        <div className="flex-1 min-w-0 flex flex-col">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">Top Trending</h1>
          <div className="text-sm text-muted-foreground mb-6">Home / Top Trending</div>
          <div className="flex gap-8 items-stretch min-h-[700px]">
            {/* Side Panel */}
            <aside className="w-56 shrink-0 hidden md:block pt-4">
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-2">Genres</h2>
                <ul className="space-y-1">
                  {GENRES.map((genre) => (
                    <li key={genre}>
                      <button
                        className={`w-full text-left px-2 py-1 rounded hover:bg-primary/10 transition ${selectedGenre === genre ? 'bg-primary text-primary-foreground font-semibold' : 'text-muted-foreground'}`}
                        onClick={() => { setSelectedGenre(genre); setCurrentPage(1); }}
                      >
                        {genre}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-2">By Year</h2>
                <ul className="space-y-1">
                  {YEARS.map((year) => (
                    <li key={year}>
                      <button
                        className={`w-full text-left px-2 py-1 rounded hover:bg-primary/10 transition ${selectedYear === year ? 'bg-primary text-primary-foreground font-semibold' : 'text-muted-foreground'}`}
                        onClick={() => { setSelectedYear(year); setCurrentPage(1); }}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            {/* Main Content */}
            <section className="flex-1 min-w-0 flex flex-col mt-8">
              {/* Filter Panel */}
              <div className="mb-6">
                <div className="flex flex-nowrap gap-2 items-center justify-end mb-2 overflow-x-auto pb-1">
                  {GENRES.slice(0, 10).map((genre) => (
                    <button
                      key={genre}
                      onClick={() => { setSelectedGenre(genre); setCurrentPage(1); }}
                      className={`px-3 py-1 rounded-md font-body text-sm transition ${selectedGenre === genre ? 'bg-primary text-primary-foreground font-semibold' : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'}`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-end mb-2">
                  <button onClick={handleReset} className="ml-auto px-3 py-1 rounded-md bg-primary text-primary-foreground font-semibold font-body text-sm">Reset All Filter</button>
                  <Select value={typeFilter} onValueChange={v => {
                    setTypeFilter(v as 'all' | 'movies' | 'series');
                    setSelectedGenre('Top Trending');
                    setSelectedYear(null);
                    setSortBy('Name');
                    setCurrentPage(1);
                  }}>
                    <SelectTrigger className="w-36 bg-muted text-muted-foreground rounded-md border-none shadow-none focus:ring-0 focus:outline-none h-10">
                      <SelectValue>{typeFilter === 'all' ? 'All' : typeFilter.charAt(0).toUpperCase() + typeFilter.slice(1)}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="movies">Movies</SelectItem>
                      <SelectItem value="series">Series</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedGenre || 'all'} onValueChange={v => { setSelectedGenre(v === 'all' ? 'Top Trending' : v); setCurrentPage(1); }}>
                    <SelectTrigger className="w-36 bg-muted text-muted-foreground rounded-md border-none shadow-none focus:ring-0 focus:outline-none h-10">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {GENRES.map((genre) => (
                        <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedYear ? String(selectedYear) : 'all'} onValueChange={v => { setSelectedYear(v === 'all' ? null : Number(v)); setCurrentPage(1); }}>
                    <SelectTrigger className="w-28 bg-muted text-muted-foreground rounded-md border-none shadow-none focus:ring-0 focus:outline-none h-10">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      {YEARS.map((year) => (
                        <SelectItem key={year} value={String(year)}>{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={v => setSortBy(v)}>
                    <SelectTrigger className="w-32 bg-muted text-muted-foreground rounded-md border-none shadow-none focus:ring-0 focus:outline-none h-10">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {SORT_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap block mb-2">
                  Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalResults)} of {totalResults} results
                </span>
              </div>
              {/* Content Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6">
                {paginatedTrending.map((item, idx) => (
                  <div key={item.id + idx} className="group/moviecard block w-full shrink-0">
                    <div className="overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out flex flex-col h-full rounded-lg">
                      <div className="relative w-full overflow-hidden aspect-[3/4]">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/moviecard:scale-120 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                      <div className="p-2 sm:p-3 flex flex-col justify-start overflow-hidden h-[60px] sm:h-[72px]">
                        <h3 className="font-semibold text-xs sm:text-sm text-foreground group-hover/moviecard:text-primary transition-colors line-clamp-2 mb-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground group-hover/moviecard:text-white transition-colors mt-0.5 line-clamp-1">
                          {item.genres.join(' • ')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
                <div>
                  <label htmlFor="trendingPerPage" className="mr-2 text-sm font-body text-muted-foreground">Trending per Page</label>
                  <select id="trendingPerPage" value={pageSize} onChange={e => { setPageSize(Number(e.target.value)); setCurrentPage(1); }} className="bg-muted text-foreground rounded px-2 py-1 font-body text-sm border border-border">
                    {PAGE_SIZES.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50">Previous</button>
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
                          onClick={() => setCurrentPage(1)}
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
                          onClick={() => setCurrentPage(i)}
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
                          onClick={() => setCurrentPage(totalPages)}
                          className="px-3 py-1 rounded font-body text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition"
                        >
                          {totalPages}
                        </button>
                      );
                    }
                    return pages;
                  })()}
                  <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-3 py-1 rounded bg-muted text-muted-foreground font-body text-sm disabled:opacity-50">Next</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
} 