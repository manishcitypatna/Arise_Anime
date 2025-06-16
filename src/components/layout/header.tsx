"use client";

import type React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Logo from '@/components/common/logo';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeClass = 'bg-primary text-primary-foreground font-semibold';
  const baseClass = `${inSheet ? 'w-full justify-start text-base py-3' : ''}`;
  const isMovies = pathname === '/movies' && !searchParams.get('type');
  const isSeries = pathname === '/series';
  const isTrending = pathname === '/top-trending';
  return (
    <>
      <Button variant="ghost" asChild className={baseClass + (pathname === '/' ? ` ${activeClass}` : '')}>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="ghost" asChild className={baseClass + (pathname.startsWith('/anime-list') ? ` ${activeClass}` : '')}>
        <Link href="/anime-list">Anime List</Link>
      </Button>
      <Button variant="ghost" asChild className={baseClass + (isMovies ? ` ${activeClass}` : '')}>
        <Link href="/movies">Movies</Link>
      </Button>
      <Button variant="ghost" asChild className={baseClass + (isSeries ? ` ${activeClass}` : '')}>
        <Link href="/series">Series</Link>
      </Button>
      <Button variant="ghost" asChild className={baseClass + (isTrending ? ` ${activeClass}` : '')}>
        <Link href="/top-trending">Top Trending</Link>
      </Button>
    </>
  );
};

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  if (!mounted) {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Logo />
                <div className="h-8 w-24 bg-muted rounded animate-pulse"></div> {/* Placeholder for nav items during skeleton load */}
            </div>
        </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Logo className="flex-shrink-0" />

        {/* Mobile & Tablet Search Bar (center) */}
        <div className="flex-grow mx-2 block md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-8 pr-3 w-full text-sm rounded-md bg-background/70 border-border focus:bg-background"
            />
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </form>
        </div>

        {/* Desktop Navigation and Spacer */}
        <nav className="hidden md:flex items-center space-x-1 ml-auto mr-2">
          <NavLinks />
        </nav>
        
        {/* Right items container */}
        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-8 pr-3 w-40 lg:w-56 text-sm rounded-md"
            />
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </form>
          
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <User className="h-5 w-5" />
            <span className="sr-only">User Profile</span>
          </Button>

          {/* Mobile Navigation Trigger (visible on mobile and tablet, hidden on md+) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-4 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="mb-4">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-1">
                  <NavLinks inSheet />
                </nav>
                <div className="mt-auto pt-4 border-t border-border space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-base py-3">
                    <User className="mr-2 h-5 w-5" /> Profile
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
