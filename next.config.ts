import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** GitHub Pages など静的ホスティング向け（`npm run build` で `out/` が生成される） */
  output: "export",
  images: {
    unoptimized: true,
  },
  /**
   * プロジェクトサイト（例: username.github.io/commanddictionary/）ならコメントを外して調整
   * basePath: "/commanddictionary",
   * assetPrefix: "/commanddictionary",
   */
};

export default nextConfig;
