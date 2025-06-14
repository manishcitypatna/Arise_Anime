import Link from 'next/link';
import type React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={className} aria-label="Home">
      <img src="/logo/logo.png" alt="StreamVerse Logo" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;
