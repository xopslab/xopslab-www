/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["youtube.com", "img.youtube.com"],
  },
};

export default nextConfig;
