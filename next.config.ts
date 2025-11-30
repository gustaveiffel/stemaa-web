import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use static export for Cloudflare Pages
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable API routes for static export
  // We'll use Cloudflare Functions instead
};

export default nextConfig;
