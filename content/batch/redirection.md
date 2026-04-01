---
title: リダイレクト
type: batch
tags: [batch, io]
aliases: [標準出力, 標準エラー]
summary: >, >>, 2>, 2>&1 を使った出力先制御の基本。
---

# リダイレクト

## 概要

- リダイレクトは出力先をファイルや別ストリームへ振り分ける仕組みです。

## 基本

```bat
@echo off
echo hello > out.log
echo world >> out.log
```

## 実用例

```bat
@echo off
setlocal

robocopy .\src .\dest /e > copy.log 2>&1
if errorlevel 8 (
  echo copy failed. see copy.log
) else (
  echo copy completed.
)
```

## 注意点

- `>` は上書き、`>>` は追記。ログを残したい場合は `>>` を使う。
- `2>&1 > file.log` と `> file.log 2>&1` は結果が異なる。通常は後者を使う。

## 関連

- `/batch/pipe-escape`
- `/batch/exit-codes`

