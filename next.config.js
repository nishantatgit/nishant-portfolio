/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // Removed invalid experimental.turbopack config for Azure Static Web Apps compatibility
  // experimental: {
  //   turbopack: {
  //     root: ".",
  //   },
  // },
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
