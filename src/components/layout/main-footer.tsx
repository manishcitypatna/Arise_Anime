import type React from 'react';
import Link from 'next/link';
import Logo from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Apple, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const FooterLinkGroup: React.FC<{ title: string; links: Array<{ href: string; label: string }> }> = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">{title}</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.href}>
          <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink: React.FC<{ href: string; icon: React.ElementType; label: string }> = ({ href, icon: Icon, label }) => (
  <Link href={href} aria-label={label} className="text-muted-foreground hover:text-primary">
    <Icon className="h-4 w-4" /> {/* Adjusted icon size */}
  </Link>
);

const MainFooter: React.FC = () => {
  const genresLinks = [
    { href: '/genre/action', label: 'Action' }, { href: '/genre/comedy', label: 'Comedy' },
    { href: '/genre/drama', label: 'Drama' }, { href: '/genre/sci-fi', label: 'Sci-Fi' },
    { href: '/genre/horror', label: 'Horror' }, { href: '/genre/romance', label: 'Romance' },
  ];
  const navigationLinks = [
    { href: '/', label: 'Home' }, 
    { href: '/movies', label: 'Movies' },
    { href: '/tv-shows', label: 'TV Shows' },
    { href: '/search', label: 'Search' },
    { href: '/player', label: 'Player Page' },
  ];
  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/help/faq', label: 'FAQ' },
    { href: '/legal/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-card text-card-foreground border-t border-border mt-12 sm:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Section: Logo and Newsletter (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8 pb-8 border-b border-border">
            <div className="md:col-span-1">
                 <Logo />
                 <p className="text-muted-foreground text-sm mt-2">Your universe of entertainment.</p>
            </div>
            <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-muted-foreground text-sm mb-3">Subscribe to our newsletter for the latest releases and updates.</p>
                <form className="flex gap-2">
                    <Input type="email" placeholder="Enter your email" className="max-w-sm bg-input border-border" />
                    <Button type="submit" variant="default" className="bg-primary text-primary-foreground">Subscribe</Button>
                </form>
            </div>
        </div>

        {/* Middle Section: Link Groups */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <FooterLinkGroup title="Genres" links={genresLinks} />
          <FooterLinkGroup title="Navigation" links={navigationLinks} />
          <FooterLinkGroup title="Company" links={companyLinks} />
          {/* Container for "Get the App" and "Follow Us" */}
          <div className="col-span-2 flex flex-row items-start gap-x-6 sm:flex-col sm:gap-y-6 sm:col-span-1 lg:col-span-1">
            <div className="w-1/2 sm:w-full"> {/* Get the App Section Wrapper */}
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Get the App</h3>
              <div className="space-y-2"> {/* Buttons container */}
                <Button variant="outline" className="w-full justify-start border-muted-foreground text-muted-foreground">
                  <Play className="mr-2 h-4 w-4" /> Google Play
                </Button>
                <Button variant="outline" className="w-full justify-start border-muted-foreground text-muted-foreground">
                  <Apple className="mr-2 h-4 w-4" /> App Store
                </Button>
              </div>
            </div>
            <div className="w-1/2 sm:w-full"> {/* Follow Us Section Wrapper */}
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Follow Us</h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2"> {/* Social icons container, allows wrapping */}
                <SocialLink href="#" icon={Facebook} label="Facebook" />
                <SocialLink href="#" icon={Twitter} label="Twitter" />
                <SocialLink href="#" icon={Instagram} label="Instagram" />
                <SocialLink href="#" icon={Youtube} label="YouTube" />
                <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal and Copyright */}
        <div className="pt-8 border-t border-border text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p>&copy; {new Date().getFullYear()} Arise Anime | All rights reserved.</p>
              <p className="mt-1 text-xs">Disclaimer: This site Arise Anime does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <Link href="/legal/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-primary">Terms of Service</Link>
              <Link href="/legal/cookies" className="hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
