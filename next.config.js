/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
};

module.exports = {
  images: {
    loader: "default",
    unoptimized: true,
    domains: ["images.unsplash.com"],
  },
};
