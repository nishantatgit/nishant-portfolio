/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    turbopack: {
      root: ".",
    },
  },
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
