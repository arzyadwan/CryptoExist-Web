/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Add this if your images don't load correctly on GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;