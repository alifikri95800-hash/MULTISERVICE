/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: "https://plombierdepannageparis.fr",
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.plombierdepannageparis.fr',
          },
        ],
        destination: 'https://plombierdepannageparis.fr/:path*',
        permanent: true,
      },
    ];
  },
  // Assurer la génération SSG
  experimental: {
    // Pas de configuration expérimentale qui pourrait interférer
  }
};

module.exports = nextConfig;