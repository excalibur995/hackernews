/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["news.ycombinator.com"],
  },
};

module.exports = nextConfig;
