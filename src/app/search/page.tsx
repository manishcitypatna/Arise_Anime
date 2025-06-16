import { Suspense } from 'react';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';
import SearchResults from './search-results';

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">Search Results</h1>
        <div className="text-sm text-muted-foreground mb-6">Home / Search</div>

        <Suspense fallback={<div className="text-center py-8">Loading search results...</div>}>
          <SearchResults />
        </Suspense>
      </main>
      <MainFooter />
    </div>
  );
} 