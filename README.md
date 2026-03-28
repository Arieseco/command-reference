# コマンドプロンプトリファレンス

cmd.exe（コマンドプロンプト）とバッチ（`.bat`/`.cmd`）のリファレンスサイト。

## 前提

- **Node.js：LTS を使用**（開発/ビルドに必須）
- パッケージマネージャ：npm（本リポジトリは npm で統一）

## 開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:4321/commanddictionary` を開きます。

## ビルド / プレビュー

```bash
npm run build
npm run preview
```

## ロールバック手順（revert）

公開後に不具合が見つかった場合は、`main` の問題コミットを `revert` して復旧します。

```bash
git log --oneline
git revert <bad_commit_hash>
git push origin main
```

- `git revert` は「打ち消しコミット」を追加するため、履歴を壊さずに戻せます
- push 後、GitHub Pages の自動デプロイで復旧版が公開されます
- 複数コミットを戻す場合は、必要な順序で複数回 `git revert` します

## 主要ページ

- トップ: `/`
- 検索: `/search/`
- コマンド一覧（A-Z）: `/commands/`
- 逆引き（用途）: `/reverse/`
- バッチ一覧: `/batch/`
- トピック一覧: `/topics/`

## 実装メモ（URL方針）

- GitHub Pages のプロジェクトサイト配信を前提に `base: "/commanddictionary"` を使用
- 内部リンクとフォーム送信先は `withBase()` で生成
- URLは pretty URL（末尾スラッシュ付き）で統一

## ドキュメント

- `docs/README.md`
- `docs/REQUIREMENTS.md`
- `docs/BASIC_DESIGN.md`
- `docs/DEPLOYMENT_PLAN.md`
- `docs/TODO.md`

## 記事追加フロー（Content Collections）

記事は Astro Content Collections として、次の場所に置きます。

- コマンド: `src/content/commands/`
- バッチ文法: `src/content/batch/`
- 横断トピック: `src/content/topics/`

テンプレ（複製して使う）:

- `src/content/commands/_template.md`
- `src/content/batch/_template.md`
- `src/content/topics/_template.md`

