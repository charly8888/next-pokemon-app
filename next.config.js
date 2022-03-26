/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   outputStandalone: true,
  // },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
