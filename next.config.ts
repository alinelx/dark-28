import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "ncultura.pt",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;