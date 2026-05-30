/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  eslint:     { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // Enable static optimization
  output: "standalone",
 
};
module.exports = nextConfig;
