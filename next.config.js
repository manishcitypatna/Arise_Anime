/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.anime-planet.com',
        pathname: '/anime/primary/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myanimelist.net',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'shikimori.one',
        pathname: '/system/**',
      },
      {
        protocol: 'https',
        hostname: 'images.justwatch.com',
        pathname: '/poster/**',
      }
    ],
  },
}

module.exports = nextConfig 