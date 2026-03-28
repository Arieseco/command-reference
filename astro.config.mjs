import { defineConfig } from 'astro/config';

export default defineConfig({
  /**
   * GitHub Pages（プロジェクトサイト）の想定:
   *   https://<owner>.github.io/commanddictionary/
   * よって base は "/commanddictionary" とする。
   *
   * ユーザーサイト（https://<owner>.github.io/）にする場合は base を "/" に変更する。
   */
  base: '/commanddictionary',
});

