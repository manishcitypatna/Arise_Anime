import type React from 'react';
import Image from 'next/image';
import type { AdBannerItem } from '@/types';
import { cn } from '@/lib/utils';

interface AdBannerSectionProps {
  ad: AdBannerItem;
}

const AdBannerSection: React.FC<AdBannerSectionProps> = ({ ad }) => {
  // Desktop specific classes
  const desktopAspectRatioClass = ad.aspectRatio === '3.4:0.7' ? 'aspect-[3.4/0.7]' : 'aspect-[3.4/1.2]';
  const desktopMaxHClass = ad.aspectRatio === '3.4:0.7' ? 'max-h-[250px]' : 'max-h-[400px]';
  
  // Mobile specific aspect ratio based on ad.aspectRatio prop
  const mobileImageAspectRatioClass = ad.aspectRatio === '3.4:0.7' ? 'aspect-[34/7]' : 'aspect-[17/6]';

  // Use a placeholder if imageUrl is missing
  const imageUrl = ad.imageUrl || '/banners/After_New_Releases.png';

  return (
    <section className="my-8 sm:my-12 text-foreground">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className={cn(
          "relative w-full overflow-hidden",
          mobileImageAspectRatioClass
        )}>
          <Image
            src={imageUrl}
            alt={ad.title}
            fill
            className="object-cover"
            data-ai-hint={ad.imageHint}
          />
        </div>
      </div>
      
      {/* Desktop Layout */}
      <div className={cn(
        "hidden md:block relative w-full h-auto text-foreground", 
        desktopAspectRatioClass, 
        desktopMaxHClass
      )}>
        <Image
          src={imageUrl}
          alt={ad.title}
          fill
          className="object-cover"
          data-ai-hint={ad.imageHint}
        />
      </div>
    </section>
  );
};

export default AdBannerSection;
