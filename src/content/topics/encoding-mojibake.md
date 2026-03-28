---
title: 文字コードと文字化け
type: topic
tags: [encoding, troubleshoot, windows]
aliases: [文字化け, code page, cp932, utf-8]
summary: コマンドプロンプトで文字化けが起きる原因と、実践的な対処手順。
---

# 文字コードと文字化け

## 概要

- 文字化けの多くは「表示側コードページ」と「ファイル実体の文字コード」の不一致で発生します。

## 症状

- 日本語が `??` や記号列として表示される
- バッチで読み込んだ文字列だけ崩れる

## 原因

- `cmd.exe` のコードページと、テキストファイルのエンコーディングが一致していない
- UTF-8（BOMなし）や Shift_JIS（CP932）混在で誤解釈される

## 対処

```cmd
REM 現在のコードページ確認
chcp

REM UTF-8へ一時変更（必要時）
chcp 65001
```

```cmd
REM CP932へ戻す（日本語Windowsで一般的）
chcp 932
```

- エディタ保存形式と `chcp` の設定を揃える
- 可能ならプロジェクト内で文字コード方針を統一する

## 関連

- `/commands/chcp/`
- `/batch/variables/`

