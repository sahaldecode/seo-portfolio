/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  eslint:     { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  compress:   true,
  poweredByHeader: false,
};
module.exports = nextConfig;
