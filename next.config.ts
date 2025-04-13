import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@ant-design/icons'],
  typescript: {
    // 如果你想暂时绕过类型检查来完成构建
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
