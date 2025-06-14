import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'drive.google.com',
      'cdn.myanimelist.net',
      'static.wikia.nocookie.net',
      's4.anilist.co',
    ],
  },
};

export default nextConfig;
