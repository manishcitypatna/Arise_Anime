'use client';

import React from 'react';
import Header from '@/components/layout/header';
import MainFooter from '@/components/layout/main-footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f1f] text-white">
      <Header />
      <main className="flex-grow pt-16 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold font-headline text-foreground mb-2 mt-4">Privacy Policy</h1>
          <div className="text-sm text-muted-foreground mb-6">Home / Legal / Privacy Policy</div>

          <div>
            <h2 className="text-2xl font-bold mb-8">Privacy Policy for Arise Anime</h2>

            <div className="space-y-8">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">1. Data We Do NOT Collect</h3>
                <p className="mb-4">To protect your privacy, Arise Anime does not collect or store:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal identifiers (names, emails, phone numbers)</li>
                  <li>Payment information (we don't process payments)</li>
                  <li>IP addresses or device fingerprints (we use anonymized analytics)</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">2. Data We Collect (Minimal & Anonymous)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2">Data Type</th>
                        <th className="text-left p-2">Purpose</th>
                        <th className="text-left p-2">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="p-2">Session cookies</td>
                        <td className="p-2">Remember video progress, dark mode preference</td>
                        <td className="p-2">7 days</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="p-2">Aggregate watch history*</td>
                        <td className="p-2">Improve recommendations</td>
                        <td className="p-2">30 days</td>
                      </tr>
                      <tr>
                        <td className="p-2">Browser type</td>
                        <td className="p-2">Optimize streaming compatibility</td>
                        <td className="p-2">Never stored</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">*"Watch history" refers only to anime titles, not linked to individual users.</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">3. Third-Party Streaming Links Disclaimer</h3>
                <p className="mb-4">Arise Anime acts as an index of publicly available streaming links.</p>
                <p className="mb-4">When you click "Watch Now," you're redirected to external sites with their own privacy policies.</p>
                <p className="mb-4">We do not control ads, cookies, or data collection on these third-party sites.</p>
                <p className="mb-2">User Safety Tips:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>✔ Use a VPN for anonymity</li>
                  <li>✔ Install uBlock Origin to block malicious ads</li>
                  <li>✔ Never enter personal info on third-party players</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">4. Cookies & Tracking Technologies</h3>
                <p className="mb-4">We use only essential cookies:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>prefers_quality: Saves your resolution setting (e.g., 720p)</li>
                  <li>last_visited: Returns you to your previous page</li>
                </ul>
                <p className="mt-4">How to Opt Out: Disable cookies in your browser, but note:</p>
                <p className="text-yellow-500 mt-2">⚠ Video progress saving will not work.</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">5. Legal Compliance & DMCA</h3>
                <p className="mb-4">Arise Anime complies with 17 U.S.C. § 512(c) (DMCA "safe harbor").</p>
                <p className="mb-4">We remove infringing links within 48 hours of valid notices.</p>
                <p>Submit takedown requests to: dmca@ariseanime[.]com.</p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">6. Data Security Measures</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>No user accounts → No databases to hack.</li>
                  <li>All traffic routed through Cloudflare DNS.</li>
                  <li>Site scanned daily for malware via Sucuri.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">7. Policy Updates</h3>
                <p className="mb-4">We'll notify users of changes by:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Posting a banner on the site for 7 days</li>
                  <li>Updating the "Last Updated" date above</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">8. Contact & Liability Limitation</h3>
                <p className="mb-4">For questions: legal@ariseanime[.]com</p>
                <p className="mb-4">Important: By using Arise Anime, you acknowledge that:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>We're not responsible for third-party content.</li>
                  <li>Streaming copyrighted material may violate laws in your country.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <MainFooter />
    </div>
  );
} 