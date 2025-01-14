/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ikea.cn',
        pathname: '/cn/zh/images/**',
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig 