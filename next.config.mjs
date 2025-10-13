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
  
  // Set base path for GitHub Pages (uncomment and update if using project page)
  // basePath: '/your-repo-name',
  
  // Experimental features for faster builds
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issues
  },
};

export default nextConfig;
