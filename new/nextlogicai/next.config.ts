import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    turbopack: {
        root: "./public/nextlogicai", // point to your actual project root
    },
};

export default nextConfig;
