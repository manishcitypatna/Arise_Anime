
import type React from 'react';
import type { DynamicBoxContent } from '@/types';
import DynamicContentBox from '@/components/shared/dynamic-content-box';

interface TvShowGridSectionProps {
  title: string;
  data: DynamicBoxContent[]; // Expects 7 items: 6 small, 1 large (last one)
}

const TvShowGridSection: React.FC<TvShowGridSectionProps> = ({ title, data }) => {
  if (!data || data.length !== 7) {
    console.warn("TvShowGridSection expects exactly 7 data items.");
    return null; 
  }

  const smallBoxes = data.slice(0, 6);
  const largeBox = data[6];
  const maxInitialDelay = 1000; // Max delay in ms (e.g., 1 second)

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground font-headline mb-4 sm:mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6"> {/* Changed main grid definition */}
          {/* Left side: 6 boxes */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"> {/* Changed to md:col-span-3 */}
            {smallBoxes.map((boxData, index) => (
              <DynamicContentBox
                key={`small-box-${index}`}
                content={{ items: boxData.items, isLarge: false }}
                className="aspect-[4/3]"
                cycleInterval={1500}
                initialDelay={Math.random() * maxInitialDelay}
              />
            ))}
          </div>
          
          {/* Right side: 1 big box */}
          <div className="md:col-span-2 h-full"> {/* Changed to md:col-span-2 */}
             <DynamicContentBox
                key="large-box"
                content={{ items: largeBox.items, isLarge: true }}
                className="aspect-[4/3] md:min-h-full"
                cycleInterval={1500}
                initialDelay={Math.random() * maxInitialDelay}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvShowGridSection;
