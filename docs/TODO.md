# TODO（現時点）

要件定義：`REQUIREMENTS.md`  
基本設計：`BASIC_DESIGN.md`  
デプロイ計画：`DEPLOYMENT_PLAN.md`  
詳細設計：`detailed-design/`

## MVP（公開まで）

### 1) プロジェクト初期化

- [x] Node.js（LTS）前提をREADMEに明記
- [x] Astro + TypeScript プロジェクト作成
- [x] パッケージマネージャを決めて固定（npm/pnpm/yarnのどれか）
- [x] GitHub Pages配信用に `base` 等の設定方針を決める（URL形式と整合）
- [x] GitHub Pagesの `base` に合わせてリンク/フォームURLを統一（`import.meta.env.BASE_URL`）

### 2) UI（Material Design）

- [x] `material-web` 導入
- [x] レイアウト骨格（ヘッダ/メイン/サイドバー/フッタ）作成
- [x] タイポグラフィ/コードブロック見た目の統一（読みやすさ優先）
- [x] ヘッダーを廃止（レイアウト/ページからヘッダ領域を削除）
- [x] フッターを廃止（レイアウト/ページからフッタ領域を削除）
- [x] サイドバーメニューを「大アイコン＋アイコン下に小さい文字」に変更
- [x] サイドバーのアイコンをホバーで太くするアニメーション（Material Symbolsのvariationで表現）
- [x] サイドバーボタン：ホバーで色が変わるのはアイコンのみ（Material Design準拠）
- [x] サイドバーボタン：ホバーでアイコンだけでなく文字も太字になる
- [x] サイドバーとメイン画面の間の区切り線（境界線）を消す
- [x] サイドバーをホバーしたときに出てくるサブサイドバーの角を丸くする（Material Design 3風）
- [x] サイドバーにHOMEボタン追加（ボタンのCSSが固まってから作業）

### 3) コンテンツ管理（frontmatter必須）

- [x] 記事の置き場所を確定（例：Astro Content Collections に寄せる）
- [x] frontmatterスキーマ（`title/type/tags/aliases/summary`）を実装でバリデーション
- [x] 既存テンプレ（`TEMPLATE_COMMAND.md` / `TEMPLATE_BATCH.md`）を運用フローに組み込む

### 4) 検索（高品質）

- [x] Pagefind 等の静的全文検索を導入
- [x] 追加の「候補辞書」（タイトル/別名/summary）をビルド時に生成する方針を実装
- [x] 検索ページ `/search/` を作成（クエリ `q`、タグ絞り込み）

### 5) 索引・逆引き

- [x] コマンド一覧（A-Z）ページ `/commands/` を作成
- [x] 逆引き（用途）ページ `/reverse/` を作成（タグから自動生成）
- [x] サイドバーの「代表タグショートカット」を自動生成で実装

### 6) トップページ（詳細設計に準拠）

- [x] `detailed-design/home.md` の通りにトップ `/` を実装
- [x] 検索サジェスト（必須）を実装（最大10件、↑↓/Enter/Esc、ARIA）
- [x] トップページを作成（デザインを詰める）

### 7) コンテンツ作成（最低限）

- [x] コマンドページ数本（例：`echo`、`set`、`cd`、`dir`、`copy`）
- [x] バッチ文法ページ数本（例：変数、遅延展開、if、for）
- [x] topics を1本（例：文字コード/文字化け）

### 8) デプロイ（GitHub Pages）※優先度低

- [ ] GitHub Actionsでビルド→Pages公開（`main` pushで自動）
  - [x] 雛形ワークフローを追加（`.github/workflows/deploy-pages.yml`）
- [x] ロールバック手順（revert）をREADME/計画に沿って確認

## ドキュメント（整備）

- [x] `docs/README.md` に「次に作るべきページ（MVP順）」を追記
- [x] 詳細設計（画面単位）を増やす
  - [x] `/search/`（検索画面）
  - [x] `/commands/`（A-Z索引）
  - [x] `/reverse/`（逆引き）
  - [x] `/batch/`（バッチ一覧）
  - [x] `/topics/`（トピック一覧）
- [x] URL形式（末尾スラッシュ等）の決定内容を `BASIC_DESIGN.md` に反映（要件：今決める）

## 現在存在する画面（実装済み）

- `/`（トップ）
- `/search/`（検索）
- `/commands/`（コマンド一覧 A-Z）
- `/commands/<slug>/`（コマンド詳細）
- `/reverse/`（逆引き）
- `/batch/`（バッチ一覧）
- `/batch/<slug>/`（バッチ詳細）
- `/topics/`（トピック一覧）
- `/topics/<slug>/`（トピック詳細）

## 発生しうるHTTPレスポンス（現実装ベース）

- `200 OK`：静的ページ配信（`/`、`/search/`、`/commands/`、`/reverse/`、`/batch/`、`/topics/` ほか）
- `200 OK`：JSON配信（`/search-candidates.json`）
- `404 Not Found`：未定義URL、存在しない静的パス
- `405 Method Not Allowed`：`/search-candidates.json` への GET 以外のメソッド
- `5xx`：ホスティング/CDN障害時などの配信エラー（アプリ実装外）
  - 対象想定：`500` / `502` / `503` / `504`
  - 画面詳細：`docs/detailed-design/error-5xx.md`
  - 方針：今後作成するエラー画面は「ここに列挙された実際に発生しうるレスポンス」を対象とする（発生しない `3xx` は作成しない）

## 未実装画面（予定）

- `/5xx/`（サーバーエラー時の共通エラー画面）
- `200` 以外のHTTPレスポンスごとの画面を作成する（対象は「発生しうるHTTPレスポンス」節に記載のもののみ）
- 将来追加候補は `docs/ARTICLE_BACKLOG.md` と `docs/REQUIREMENTS.md` の更新時にここへ追記する

## 将来（後回し）

- [ ] リンク切れチェックなどのCI
- [ ] カスタムドメイン
- [ ] 検索ランキングの細かい最適化（実装で試してから）

