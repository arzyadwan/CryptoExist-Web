import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/CryptoExist-Web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
