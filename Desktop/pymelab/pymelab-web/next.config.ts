import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  turbopack: {},
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'gsap', '@gsap/react'],
  },
};

export default nextConfig;
