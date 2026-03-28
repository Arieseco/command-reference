# docs

このフォルダは「コマンドプロンプトリファレンス」の本文（Markdown）を置きます。

- 規約：`CODING_STANDARDS.md`
- 要件定義：`REQUIREMENTS.md`
- 基本設計：`BASIC_DESIGN.md`
- デプロイ計画：`DEPLOYMENT_PLAN.md`
- 詳細設計：`detailed-design/README.md`
- TODO：`TODO.md`
- 記事バックログ：`ARTICLE_BACKLOG.md`
- テンプレ：
  - `TEMPLATE_COMMAND.md`
  - `TEMPLATE_BATCH.md`

## 実装で使う記事テンプレ（運用先）

Content Collections の運用テンプレは `src/content` 側にあります。

- `src/content/commands/_template.md`
- `src/content/batch/_template.md`
- `src/content/topics/_template.md`

## 次に作るべきページ（MVP順）

MVP達成のため、次の順でページを整備します。

1. `/search/` の詳細設計ページ（`docs/detailed-design/search.md`）
2. `/commands/` の詳細設計ページ（`docs/detailed-design/commands.md`）
3. `/reverse/` の詳細設計ページ（`docs/detailed-design/reverse.md`）
4. `/batch/` の詳細設計ページ（`docs/detailed-design/batch.md`）
5. `/topics/` の詳細設計ページ（`docs/detailed-design/topics.md`）

補足:
- 実装済みページでも、受け入れ条件と状態遷移を明文化するため詳細設計を作成する。
- URL形式（末尾スラッシュなど）は `BASIC_DESIGN.md` に反映して設計と実装を一致させる。

