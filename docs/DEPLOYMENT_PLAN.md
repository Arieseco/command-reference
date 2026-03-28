# デプロイ計画：コマンドプロンプトリファレンス

本プロジェクトは **静的サイト（Astro）** を **GitHub Pages** にデプロイする。
DB/バックエンドは前提としない（検索はビルド時に索引生成して同梱）。

## 1. デプロイのゴール

- `main` の内容が **自動でGitHub Pagesに反映**される
- 失敗時は **公開物を壊さない**（ビルド失敗ならデプロイしない）
- リリース後に問題があれば **過去コミットへ戻すだけで復旧**できる

## 2. 環境

- **開発（local）**：開発サーバで確認
- **本番（prod）**：GitHub Pages

> できれば後で追加：PRごとのプレビュー（Preview）。まずはMVPで「本番だけ確実に」でもOK。

## 3. ブランチ運用（MVP）

- **本番ブランチ**：`main`
- 変更は `main` へマージ（個人運用なら直コミットでも可）

## 4. デプロイ方式（推奨）

### 方式A：GitHub Actions → GitHub Pages（推奨）

- `main` への push をトリガに、以下を自動実行する
  - 依存関係インストール
  - `astro build`
  - 生成物（`dist/`）を GitHub Pages に公開

**メリット**

- 自動化できる（人手が不要）
- ビルド失敗時に公開しない
- ロールバックが簡単（過去コミットへ戻す）

### 方式B：手動デプロイ（予備）

- ローカルで `astro build` して、生成物をPagesにアップロード

**用途**

- まず公開だけ急ぐ
- Actions設定が詰まった時の迂回路

## 5. デプロイに必要な前提（後で作業タスク化）

- Node.js（LTS）
- パッケージマネージャ（npm / pnpm / yarn のどれかに統一）
- Astro プロジェクト（`package.json`、`astro.config.*`）
- ビルド出力先を `dist/` に統一（Astro既定）

## 6. GitHub Pages 設定（想定）

- Pages の **Source**：GitHub Actions
- 公開URL：`https://<owner>.github.io/<repo>/`
- リポジトリがサブパス配信になるため、Astro側の `base` 設定が必要になる
  - 本リポジトリは `commanddictionary` を想定し、`base: "/commanddictionary"` とする（`astro.config.mjs`）

## 7. 監視 / 失敗時の対応

- **ビルド失敗**：GitHub Actions のログで原因を特定し修正 → 再push
- **公開後の不具合**：直前のコミットに戻す（revert）→ 自動デプロイで復旧

## 8. ロールバック方針

- 原則：`main` のコミットを `git revert` して復旧
- 「壊れている版」を残したい場合は、タグ（例：`v0.1.0`）で区切る

### 8.1 実施手順（MVP）

1. 不具合を含むコミットを特定する（`git log --oneline`）
2. `git revert <commit_hash>` を実行して打ち消しコミットを作成する
3. `main` に push する（`git push origin main`）
4. GitHub Actions / Pages のデプロイ完了を確認する
5. 公開URLで復旧確認する

補足:

- 履歴を壊す操作（`reset --hard`、force push）は原則使わない
- 複数コミットを戻すときは、影響範囲を確認しながら1件ずつ revert する
- 先に緊急復旧を優先し、原因調査や恒久対応は別コミットで行う

## 9. 将来拡張（必要になったら）

- **PRプレビュー**：PRごとに一時URL（例：Cloudflare Pages）で確認
- **カスタムドメイン**：独自ドメイン + HTTPS（GitHub Pages）
- **リンク切れチェック**：ビルド時に検知（CI）
- **検索品質**：別名/同義語辞書の整備、重み付け

