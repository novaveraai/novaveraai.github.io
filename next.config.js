/** @type {import('next').NextConfig} */

// ─────────────────────────────────────────────────────────────
// DEPLOYMENT TOGGLE
// User site  → BASE_PATH = ""                     (novaveraai.github.io)
// Project site → BASE_PATH = "/repo-name"         (novaveraai.github.io/repo-name)
// ─────────────────────────────────────────────────────────────
const BASE_PATH = "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: BASE_PATH || undefined,
  assetPrefix: BASE_PATH || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;