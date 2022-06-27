/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["files.stripe.com"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
