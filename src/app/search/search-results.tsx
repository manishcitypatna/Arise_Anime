'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { MOCK_ANIME } from '@/data/mock-data';
import AdBannerSection from '@/components/sections/ad-banner-section';
import { adBannerSearchData } from '@/data/mock-data';

const PAGE_SIZES = [14, 28, 42];

export default function SearchResults() {
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

  return (
    <>
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
    </>
  );
} 