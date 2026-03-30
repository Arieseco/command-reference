# Command Prompt Reference

コマンドプロンプト（cmd.exe）とバッチに関するリファレンス。**Astro は廃止し、Next.js（App Router）で再構築**しています。

## 技術スタック

- **Next.js** 16（App Router）
- **React** 19 / **TypeScript**
- **MUI**（`@mui/material`）+ **Emotion**（`@mui/material-nextjs` の App Router 用キャッシュ）

## セットアップ

```bash
npm install
npm run dev
```

- 開発: <http://localhost:3000>
- 本番ビルド（静的書き出し）: `npm run build` → 出力は **`out/`**（GitHub Pages 用 `upload-pages-artifact` もこのパス）
- `npm start` は Next のサーバ用。静的ホスティングでは `out/` をそのまま配信

## コンテンツ

旧 Astro の `src/content` から取り出した Markdown は **`content/`**（`commands/`, `batch/`, `topics/`）にあります。ルーティング・MDX 取り込みはこれから接続します。

設計メモは引き続き **`docs/`** を参照してください。

## 廃止したもの

- Astro 設定・`src/pages`・`src/components`・`dist`（静的出力）など一式
- **Tailwind CSS**（`postcss.config.mjs` 含む）
