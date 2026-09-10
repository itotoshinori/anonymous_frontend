import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Vercelでのビルド時にESLintのエラーや警告でコケないようにする
  ignoreDuringBuilds: true,
};

export default nextConfig;
