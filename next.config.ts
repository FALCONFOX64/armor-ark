import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for deployment to cPanel / shared hosting
  output: 'export',

  // Required for static export (Next Image optimization needs a custom loader otherwise)
  images: {
    unoptimized: true,
  },

  // Helps with routing on static hosts
  trailingSlash: true,
};

export default nextConfig;
