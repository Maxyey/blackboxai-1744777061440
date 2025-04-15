/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure this matches your GitHub repository name
  basePath: '/blackboxai-1744702625780-main',
  assetPrefix: '/blackboxai-1744702625780-main/',
  trailingSlash: true,
}

module.exports = nextConfig
