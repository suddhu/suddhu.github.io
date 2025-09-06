/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Experimental features for faster builds
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issues
  },
};

export default nextConfig;
