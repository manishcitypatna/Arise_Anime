'use client';

import React from 'react';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">About Us</h1>
          <div className="text-sm text-muted-foreground mb-6">Home / About Us</div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Arise Anime - Your Ultimate Free Anime Streaming Destination <hr /> Discover the Best Anime Streaming Experience Online</h2>
            <p className="text-lg mb-8">
              At Arise Anime, we're passionate about bringing you the highest quality anime content completely free. As one of the top anime streaming sites, we offer an extensive library of subbed and dubbed anime in crystal-clear HD. Whether you're looking for classic anime series, trending shows, or the latest movies, we've got you covered with daily updates and multiple streaming options.
            </p>

            <h2 className="text-2xl font-bold mb-4">Why Arise Anime Stands Out Among Anime Sites</h2>

            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">1. Unmatched Streaming Quality</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>1080p Full HD streaming for premium viewing</li>
                  <li>Adaptive bitrate technology that automatically adjusts to your internet speed</li>
                  <li>Multiple server options to ensure uninterrupted streaming</li>
                  <li>Minimal buffering thanks to our optimized CDN network</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">2. Largest Anime Collection Online</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>10,000+ anime episodes across all genres</li>
                  <li>500+ complete anime series from classics to new releases</li>
                  <li>Dedicated sections for:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Shounen</li>
                      <li>Shoujo</li>
                      <li>Seinen</li>
                      <li>Isekai</li>
                      <li>Mecha</li>
                      <li>Slice of Life</li>
                      <li>And more!</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">3. User-Friendly Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>No registration required - start watching instantly</li>
                  <li>Download anime for offline viewing</li>
                  <li>Bookmark system to save your progress</li>
                  <li>Customizable subtitles (size, color, font)</li>
                  <li>Dark mode for comfortable night viewing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Is Arise Anime Safe to Use?</h2>
            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <p className="mb-4">We take your online security seriously:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>HTTPS encrypted connections for all users</li>
                <li>Regular malware scans to keep the site clean</li>
                <li>Ad quality control to prevent malicious ads</li>
                <li>Community reporting system for quick issue resolution</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">Note: We show minimal ads to keep the service free while maintaining excellent performance.</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Optimized for All Devices</h2>
            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <p className="mb-4">Enjoy seamless anime streaming on:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Smartphones (iOS & Android)</li>
                <li>Tablets (iPad & Android)</li>
                <li>Desktop computers (Windows & Mac)</li>
                <li>Smart TVs (via browser or casting)</li>
                <li>Gaming consoles (PS5, Xbox Series X)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Join Our Growing Anime Community</h2>
            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <p className="mb-4">With over 1 million monthly active users, Arise Anime has become one of the most trusted anime communities online:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>50,000+ Discord members discussing anime daily</li>
                <li>Active subreddit with episode discussions</li>
                <li>Anime recommendation forums</li>
                <li>User rating system for all shows</li>
                <li>Weekly polls to decide what we add next</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Our Commitment to Anime Fans</h2>
            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <p className="mb-4">We're constantly improving Arise Anime based on user feedback:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>New episodes added within 1 hour of Japanese broadcast</li>
                <li>Dedicated request system for rare anime</li>
                <li>Regular site upgrades for better performance</li>
                <li>Transparent operation with community updates</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Is Arise Anime really free?</h3>
                <p>Yes! We offer completely free anime streaming with no hidden costs.</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">How often is new content added?</h3>
                <p>We update our library daily with:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>New episodes of ongoing series</li>
                  <li>Classic anime additions</li>
                  <li>Seasonal anime as they air</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I request specific anime?</h3>
                <p>Absolutely! We have a dedicated request system where users can vote on what anime we add next.</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Do you have an app?</h3>
                <p>While we currently don't have a dedicated app, our website is fully mobile-optimized and works like an app when added to your home screen.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Start Your Anime Journey Today</h2>
            <div className="bg-white/5 p-6 rounded-lg mb-8">
              <p className="mb-4">Join millions of anime fans who trust Arise Anime for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>The largest anime library</li>
                <li>Highest quality streams</li>
                <li>Most user-friendly interface</li>
                <li>Most active anime community</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
