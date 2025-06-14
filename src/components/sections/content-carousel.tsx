
"use client";

import type React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ItemDisplayConfig as GenericItemDisplayConfig } from '@/types';
import { cn } from '@/lib/utils';

interface ContentCarouselProps<TItem extends { id: string }> {
  title?: string;
  items: TItem[];
  ItemComponent: React.ComponentType<{ item: TItem; displayConfig?: GenericItemDisplayConfig }>;
  itemDisplayConfig?: GenericItemDisplayConfig;
  cardClassName?: string;
  overrideLeftArrowIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  overrideRightArrowIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  arrowWrapperClass?: string;
  arrowIconClass?: string;
}

const ContentCarousel = <TItem extends { id: string }>({
  title,
  items,
  ItemComponent,
  itemDisplayConfig,
  cardClassName,
  overrideLeftArrowIcon: OverrideLeftArrowIcon,
  overrideRightArrowIcon: OverrideRightArrowIcon,
  arrowWrapperClass,
  arrowIconClass,
}: ContentCarouselProps<TItem>) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = Math.round(container.scrollLeft);
      const scrollWidth = Math.round(container.scrollWidth);
      const clientWidth = Math.round(container.clientWidth);

      const hasHorizontalScrollbar = scrollWidth > clientWidth + 1;

      setCanScrollLeft(hasHorizontalScrollbar && scrollLeft > 1);
      setCanScrollRight(hasHorizontalScrollbar && scrollLeft < scrollWidth - clientWidth - 1);
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !items || items.length === 0) {
        setCanScrollLeft(false);
        setCanScrollRight(false);
        return;
    }

    checkScrollability();

    const handleResize = () => checkScrollability();

    container.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(checkScrollability);
      if (container) {
        resizeObserver.observe(container);
      }
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
      window.removeEventListener('resize', handleResize);
      if (resizeObserver && container) {
        resizeObserver.unobserve(container);
      }
    };
  }, [items, cardClassName, itemDisplayConfig, checkScrollability]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollability, 350);
    }
  };

  if (!items || items.length === 0) {
    return (
      <section className="py-0 my-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-headline mb-4 sm:mb-6">{title}</h2>
          )}
          <p className="text-muted-foreground">No items to display.</p>
        </div>
      </section>
    );
  }

  const defaultCardClassName = "w-36 sm:w-40 md:w-44 lg:w-48";
  const defaultArrowWrapperClass = "h-24 w-12";
  const defaultArrowIconClass = "h-10 w-10";

  const LeftArrow = OverrideLeftArrowIcon || ChevronLeft;
  const RightArrow = OverrideRightArrowIcon || ChevronRight;

  return (
    <section className="py-0 my-0">
      {title && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-headline">{title}</h2>
            <Link href="#" className="text-sm text-primary hover:underline">
              View All
            </Link>
          </div>
        </div>
      )}
      <div className="relative group">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container for consistent padding */}
            <div
                ref={scrollContainerRef}
                className={cn(
                "flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide py-1",
                "overscroll-x-contain"
                )}
            >
                {items.map((item) => (
                <div key={item.id} className={cn(cardClassName || defaultCardClassName, "shrink-0")}>
                    <ItemComponent item={item} displayConfig={itemDisplayConfig} />
                </div>
                ))}
            </div>
        </div>

          {canScrollLeft && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 z-10",
                "hover:bg-transparent text-white hover:text-white",
                "transition-opacity duration-300 flex items-center justify-center",
                "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
                arrowWrapperClass || defaultArrowWrapperClass
              )}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <LeftArrow className={cn(arrowIconClass || defaultArrowIconClass)} />
            </Button>
          )}

          {canScrollRight && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 z-10",
                "hover:bg-transparent text-white hover:text-white",
                "transition-opacity duration-300 flex items-center justify-center",
                "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100",
                arrowWrapperClass || defaultArrowWrapperClass
              )}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <RightArrow className={cn(arrowIconClass || defaultArrowIconClass)} />
            </Button>
          )}
        </div>
    </section>
  );
};

export default ContentCarousel;
