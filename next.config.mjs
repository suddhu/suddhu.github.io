/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Configure for GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // No base path needed - deploying to root
  
  // Experimental features for faster builds
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issues
  },
};

export default nextConfig;
