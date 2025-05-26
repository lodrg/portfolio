import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@ant-design/icons'],
  typescript: {
    // 如果你想暂时绕过类型检查来完成构建
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'notion-avatar.app',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'go.dev',
        pathname: '/blog/go-brand/Go-Logo/PNG/Go-Logo_Black.png',
      },
    ],
  },
};

export default nextConfig;
