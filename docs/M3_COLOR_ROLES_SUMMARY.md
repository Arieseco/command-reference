# Material Design 3 Color Roles 要約

参照: <https://m3.material.io/styles/color/roles>

## 1. Color roles とは

- UIの「どこにどの色を使うか」を定義する役割ベースの色設計。
- コンポーネントと色を対応付けるための共通ルールで、静的配色でも Dynamic Color でも使う。
- コントラスト要件を満たしやすいように、`on-*` などのペアが設計されている。
- デザイン/実装ではトークンとして扱う（Design token）。

## 2. 命名の基本

- `surface`: 背景や低強調の広い面
- `primary / secondary / tertiary`: 強調度の異なるアクセント色
- `container`: ボタンなど前景コンポーネントの塗り
- `on-*`: その色の上に載る文字・アイコン色
- `*variant`: 同系色の低強調版

## 3. 重要ルール（実装で特に重要）

- 色は「指定されたペア」で使う（例: `primary` には `on-primary`）。
- 意図しない組み合わせは、Dynamic Color やコントラスト設定変更時に可読性が崩れる。
- まずは Material の既定ロール割当を優先し、見た目目的だけでロールを差し替えすぎない。

## 4. 主要ロールの使い分け

### Accent 系

- `primary`: 最重要アクションや高強調要素（FAB、主要ボタン、active）
- `secondary`: 低めの強調要素（補助ボタン、選択状態の一部）
- `tertiary`: 補助的だが目立たせたい要素（バッジなど）
- それぞれ `container / on-*` の4点セットで扱う

### Error 系

- `error / on-error / error-container / on-error-container`
- エラー表示専用。Dynamic Colorでもエラー色は静的寄りで扱われる。

### Surface 系

- `surface`: 画面ベース背景
- `surface-container*`: 階層用の面色（lowest 〜 highest）
- `on-surface / on-surface-variant`: 面上の文字・アイコン
- レイアウト領域（本文、ナビ領域など）では画面サイズが変わってもロールを一貫させる。

### Outline 系

- `outline`: 重要な境界（入力枠など）
- `outline-variant`: 区切り線など装飾寄り
- divider に `outline` を乱用しない、重要境界に `outline-variant` を使いすぎない。

## 5. Add-on roles（必要な時だけ）

- `*fixed / *fixed-dim` と `on-*fixed*`:
  - ライト/ダークでトーンを固定したい場合に使用
  - 便利だがコントラスト問題を起こしやすいため慎重に使う
- `surface-bright / surface-dim`:
  - 明暗テーマをまたいでも相対的な明るさを維持したい面に使う

## 6. このプロジェクトでの適用メモ

- サイドバー背景: `surface` 系
- 通常ボタン面: `surface-container` 系
- activeボタン面: `primary-container` 相当
- active時の文字/アイコン: `on-primary-container` 相当
- 境界線や分割線は `outline-variant` を基本に、強調境界のみ `outline` を検討

## 7. 運用方針（提案）

- 新規UIを作るときは、先に「面色」と「その上の文字色」を `role` ペアで決める。
- hover/active/focus も同じ role グループ内で変化させる。
- 例外的に固定色を使う場合は、ライト/ダーク双方でコントラスト確認を必須にする。
