'use client';

import React from 'react';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">FAQ</h1>
          <div className="text-sm text-muted-foreground mb-6">Home / Help / FAQ</div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions (FAQ) - Arise Anime</h2>

            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">1. How does Arise Anime provide free anime streaming?</h3>
                <p>
                  Arise Anime is a search and discovery platform that helps you find anime content hosted on third-party servers. 
                  We don't host any videos directly but provide links to external streaming sources where you can watch anime for free.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">2. Why do I get redirected to other sites when playing videos?</h3>
                <p>
                  Since we don't host videos ourselves, clicking the "Watch Now" button will take you to an external streaming provider. 
                  These third-party servers handle the actual video playback.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">3. Is it legal to use Arise Anime?</h3>
                <p>
                  Arise Anime does not host or distribute copyrighted content. We operate as an indexing service, similar to a search engine, 
                  by aggregating publicly available streaming links. We comply with DMCA regulations and remove infringing content upon request.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">4. Are the third-party streaming sites safe?</h3>
                <p className="mb-4">
                  We try to link only to well-known, frequently used streaming platforms in the anime community. However, since these are external sites:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>✔ Use an ad-blocker (like uBlock Origin) for fewer interruptions</li>
                  <li>✔ Avoid downloading suspicious files</li>
                  <li>✔ Never enter personal info on these sites</li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">Note: We don't control ads/redirects on third-party servers.</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">5. Why do some links stop working?</h3>
                <p>
                  Third-party servers may go offline, remove content, or change domains. We regularly update broken links—if you find one, 
                  report it via our Discord so we can replace it.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">6. Can I download anime from Arise Anime?</h3>
                <p>
                  We don't provide direct downloads, but some third-party servers may offer download options. 
                  Use caution—only download from trusted sources.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">7. How can I support Arise Anime?</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Whitelist us in your ad-blocker</li>
                  <li>Share the site with friends</li>
                  <li>Join our Discord community</li>
                  <li>Report dead links/malicious ads</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">8. How often is new anime added?</h3>
                <p className="mb-4">We update links daily for:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Newly aired episodes (within hours of Japan's broadcast)</li>
                  <li>Classic anime requests</li>
                  <li>Improved quality sources</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">9. Why do I see ads on Arise Anime?</h3>
                <p>
                  Ads help cover server costs since we don't charge users. We block intrusive ads, but third-party sites may have aggressive ads—we recommend Brave Browser or AdGuard for smoother streaming.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">10. Can I request an anime that's missing?</h3>
                <p className="mb-4">Yes! Submit requests via:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Our Discord #requests channel</li>
                  <li>The "Request Anime" button on the site</li>
                </ul>
                <p className="mt-4">We'll search for working links within 24–48 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
} 