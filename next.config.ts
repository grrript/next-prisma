import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: path.join(__dirname, ".."), // Adjust this path based on your project structure
  },
};

export default nextConfig;
