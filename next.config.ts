import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Standalone output: smaller/self-contained production Docker image.
  output: "standalone",
  // Pin the workspace root (a stray package-lock.json exists in a parent dir).
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
