"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/layout/header";
import MainFooter from "@/components/layout/main-footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Play, Share2, ThumbsUp, BookmarkPlus, Flag } from 'lucide-react';

// Video sources with different qualities
const VIDEO_SOURCES = {
  high: {
    label: "1080p",
    url: "https://videos.pexels.com/video-files/4124024/4124024-sd_960_506_25fps.mp4"
  },
  medium: {
    label: "720p",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
  },
  low: {
    label: "480p",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/480/Big_Buck_Bunny_480_10s_1MB.mp4"
  }
};

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

// Add these interfaces after the existing constants
interface ContentDetails {
  id: string;
  title: string;
  description: string;
  releaseYear: string;
  duration: string;
  rating: string;
  genres: string[];
  cast: string[];
  director: string;
  posterUrl: string;
  bannerUrl: string;
  downloadOptions: {
    quality: string;
    size: string;
    url: string;
  }[];
}

// Add mock content details (replace with your actual data)
const CONTENT_DETAILS: ContentDetails = {
  id: "movie-1",
  title: "Cyber City Chronicles",
  description: "In a neon-lit metropolis of the future, a renegade detective uncovers a conspiracy that could shatter the city's fragile peace.",
  releaseYear: "2024",
  duration: "2h 15m",
  rating: "4.5/5 IMDb",
  genres: ["Sci-Fi", "Action", "Thriller"],
  cast: ["John Smith", "Emma Johnson", "Michael Brown"],
  director: "Sarah Wilson",
  posterUrl: "https://placehold.co/300x450.png",
  bannerUrl: "https://placehold.co/1920x400.png",
  downloadOptions: [
    { quality: "1080p", size: "2.1 GB", url: "#" },
    { quality: "720p", size: "1.4 GB", url: "#" },
    { quality: "480p", size: "800 MB", url: "#" }
  ]
};

// Add this interface above MOCK_DETAILS to ensure 'adult' is typed
interface MockDetailsType {
  id: string;
  title: string;
  posterUrl: string;
  bannerUrl: string;
  rating: number;
  ratingOutOf: number;
  ratingStars: number;
  totalViews: number;
  reviews: number;
  releaseYear: number;
  duration: number;
  ageRating: string;
  genres: string[];
  description: string;
  format: string;
  status: string;
  score: number;
  startDate: string;
  endDate: string;
  totalEpisodes: number;
  durationPerEpisode: string;
  country: string;
  website: string;
  languages: string[];
  adult: boolean;
  cast: string[];
  crew: string[];
}

const MOCK_DETAILS: MockDetailsType = {
  id: 'john-wick-4',
  title: 'John Wick 4',
  posterUrl: 'https://placehold.co/320x480.png',
  bannerUrl: 'https://placehold.co/1920x400.png',
  rating: 8.2,
  ratingOutOf: 10,
  ratingStars: 4,
  totalViews: 4771,
  reviews: 21,
  releaseYear: 2023,
  duration: 170,
  ageRating: 'TV-MA',
  genres: ['Action', 'Crime', 'Thriller'],
  description: 'Suspendisse eu porta quam, sit amet tristique sem. Maecenas tincidunt finibus ipsum, eget aliquet elit scelerisque non. In aliquet dapibus odio, ut gravida mauris elementum sit amet. Nulla viverra magna eget rutrum ultricies. Vestibulum suscipit neque sed sem dignissim, tincidunt efficitur urna faucibus.',
  format: 'Movie',
  status: 'Finished',
  score: 76,
  startDate: 'October 5, 2008',
  endDate: 'April 27, 2011',
  totalEpisodes: 127,
  durationPerEpisode: '25 min',
  country: 'JP',
  website: 'https://officialsite.com',
  languages: ['English', 'Japanese'],
  adult: true,
  cast: ['Brooke Mulford', 'Aliya Pacheco', 'Ricky Aleman', 'Sarah Neal'],
  crew: ['Director: Chad Stahelski', 'Writer: Derek Kolstad'],
};

const RECOMMENDED = [
  { id: 'warlock', title: 'Warlock of Dusk', year: 'Coming Soon', poster: 'https://placehold.co/200x300.png' },
  { id: 'white-house', title: 'White House Down', year: '2013', poster: 'https://placehold.co/200x300.png' },
  { id: 'sleeping-angel', title: 'The Sleeping Angel', year: '2022', poster: 'https://placehold.co/200x300.png' },
  { id: 'the-post', title: 'The Post', year: '2017', poster: 'https://placehold.co/200x300.png' },
  { id: 'spiderman', title: 'Spider Man Memo', year: '2018', poster: 'https://placehold.co/200x300.png' },
  { id: 'man-in-black', title: 'Man in Black', year: '2019', poster: 'https://placehold.co/200x300.png' },
];

const TRENDING = [
  { id: 'trending1', title: 'The Great Empire', year: '2020', poster: 'https://placehold.co/200x300.png', trending: true },
  { id: 'trending2', title: 'Zombie World', year: '2021', poster: 'https://placehold.co/200x300.png', trending: true },
  { id: 'trending3', title: 'DJ Tillu', year: '2022', poster: 'https://placehold.co/200x300.png', trending: true },
  { id: 'trending4', title: 'Love Story', year: '2023', poster: 'https://placehold.co/200x300.png' },
  { id: 'trending5', title: 'The Reckless', year: '2024', poster: 'https://placehold.co/200x300.png' },
];

// --- STAR RATING COMPONENT ---
function StarRating({ rating, outOf = 10 }: { rating: number; outOf?: number }) {
  const stars = Math.round(rating / 2);
  return (
    <div className="flex items-center gap-1 font-body text-base text-muted-foreground">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < stars ? 'text-yellow-400' : 'text-gray-600'}>★</span>
      ))}
      <span className="ml-2 text-sm text-muted-foreground">{rating}/{outOf}</span>
    </div>
  );
}

// --- BADGE COMPONENT ---
function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium mr-2 mb-2 inline-block font-body">{children}</span>;
}

// --- CAROUSEL COMPONENT ---
type CarouselItem = { id: string; title: string; year: string; poster: string; trending?: boolean };
function HorizontalCarousel({ items, label, trending = false }: { items: CarouselItem[]; label: string; trending?: boolean }) {
  return (
    <div className="mt-10">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold flex items-center gap-2">
          {trending && <span>🔥</span>}{label}
        </h2>
      </div>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
          {items.map((item, idx) => (
            <a
              key={item.id}
              href={`/player/${item.id}`}
              className="group min-w-[160px] max-w-[200px] flex-shrink-0 bg-card rounded-lg overflow-hidden shadow hover:scale-105 transition-transform"
            >
              <div className="relative">
                <img src={item.poster} alt={item.title} className="w-full h-[220px] object-cover" />
                {trending && idx < 3 && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">🔥 Trending</span>
                )}
              </div>
              <div className="p-2">
                <div className="font-semibold text-sm truncate">{item.title}</div>
                <div className="text-xs text-gray-400">{item.year}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Example data - In real implementation, this would come from props or API
const mediaInfo = {
  type: 'Series', // or 'Movie'
  title: 'Attack on Titan',
  season: 'Season 1',
  episode: 'Episode 1',
  description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, giant humanoid creatures who eat humans seemingly without reason. The story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother.',
  rating: '9.0',
  year: '2013',
  duration: '24m',
  genres: ['Action', 'Dark Fantasy', 'Post-Apocalyptic'],
  quality: '1080p',
  language: 'Japanese',
  subtitles: ['English', 'Spanish', 'French'],
};

// Example related content
const relatedContent = [
  {
    id: 1,
    title: 'Attack on Titan Season 2',
    image: 'https://cdn.myanimelist.net/images/anime/12/76049.jpg',
    episode: 'Episode 1',
  },
  {
    id: 2,
    title: 'Attack on Titan Season 3',
    image: 'https://cdn.myanimelist.net/images/anime/1613/102576.jpg',
    episode: 'Episode 1',
  },
  {
    id: 3,
    title: 'Attack on Titan: The Final Season',
    image: 'https://cdn.myanimelist.net/images/anime/1000/110531.jpg',
    episode: 'Episode 1',
  },
];

export default function PlayerPage() {
  const [selectedQuality, setSelectedQuality] = useState('1080p');
  const [selectedSubtitle, setSelectedSubtitle] = useState('English');

  useEffect(() => {
    document.title = `${mediaInfo.title} - Arise Anime`;
  }, []);

  // Video state
  const [currentQuality, setCurrentQuality] = useState<keyof typeof VIDEO_SOURCES>("high");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle video events
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleWaiting = () => setIsBuffering(true);
  const handlePlaying = () => setIsBuffering(false);

  // Control functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0];
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const changeQuality = (quality: keyof typeof VIDEO_SOURCES) => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const wasPlaying = !videoRef.current.paused;
      
      setCurrentQuality(quality);
      videoRef.current.src = VIDEO_SOURCES[quality].url;
      videoRef.current.currentTime = currentTime;
      
      if (wasPlaying) {
        videoRef.current.play();
      }
    }
  };

  // Format time helper
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle controls visibility
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // --- Play/Pause on center click ---
  const handlePlayerClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
    clickTimeoutRef.current = setTimeout(() => {
      togglePlay();
    }, 200);
  };

  // --- Double click left/right for seek ---
  const handlePlayerDoubleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      // Left side: backward 10s
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
    } else {
      // Right side: forward 10s
      videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
    }
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0 flex flex-col">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">{mediaInfo.title}</h1>
          <div className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            {' / '}
            <Link href={`/${mediaInfo.type.toLowerCase()}`} className="hover:text-primary">{mediaInfo.type}</Link>
            {' / '}
            <Link href={`/${mediaInfo.type.toLowerCase()}/${mediaInfo.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary">{mediaInfo.title}</Link>
            {mediaInfo.type === 'Series' && (
              <>
                {' / '}
                <Link href={`/${mediaInfo.type.toLowerCase()}/${mediaInfo.title.toLowerCase().replace(/\s+/g, '-')}/${mediaInfo.season.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary">{mediaInfo.season}</Link>
                {' / '}
                <span className="text-primary">{mediaInfo.episode}</span>
              </>
            )}
          </div>
          
          {/* Media Player Container */}
          <div className="w-full aspect-video bg-black rounded-lg mb-6">
            {/* Placeholder for video player */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Video Player Will Be Added Here
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-wrap gap-4 mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                  Quality: {selectedQuality}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedQuality('1080p')}>1080p</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedQuality('720p')}>720p</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedQuality('480p')}>480p</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground">
                  Subtitles: {selectedSubtitle}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {mediaInfo.subtitles.map((subtitle) => (
                  <DropdownMenuItem key={subtitle} onClick={() => setSelectedSubtitle(subtitle)}>
                    {subtitle}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex gap-2 ml-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <ThumbsUp className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Like</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <BookmarkPlus className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Add to Watchlist</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Share</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Flag className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Report</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Media Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About {mediaInfo.title}</h2>
              <p className="text-muted-foreground mb-4">{mediaInfo.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <p className="font-semibold">{mediaInfo.rating}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Year</span>
                  <p className="font-semibold">{mediaInfo.year}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <p className="font-semibold">{mediaInfo.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Quality</span>
                  <p className="font-semibold">{mediaInfo.quality}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Language</span>
                  <p className="font-semibold">{mediaInfo.language}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Subtitles</span>
                  <p className="font-semibold">{mediaInfo.subtitles.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Related Content */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Related Content</h2>
              <div className="space-y-4">
                {relatedContent.map((item) => (
                  <Card key={item.id} className="overflow-hidden bg-card border-transparent transition-colors duration-300 ease-in-out">
                    <div className="flex gap-4">
                      <div className="w-24 h-32 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-3">
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.episode}</p>
                        <Button variant="ghost" size="sm" className="mt-2 text-primary hover:text-primary">
                          <Play className="h-4 w-4 mr-1" /> Watch Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
