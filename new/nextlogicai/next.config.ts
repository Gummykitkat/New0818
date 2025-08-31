import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nextlogic-ai.com", // 👈 replace with the actual host of your images
      },
      {
        protocol: "https",
        hostname: "cdn.example.net", // 👈 add more if you use multiple
      },
    ],
  },
};

export default nextConfig;
