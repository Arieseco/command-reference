---
title: 終了コード
type: batch
tags: [batch, error-handling]
aliases: [exit /b, errorlevel]
summary: exit /b と errorlevel による成功/失敗の伝播。
---

# 終了コード

## 概要

- `exit /b N` でバッチやサブルーチンの終了コードを設定できます。
- 呼び出し側は `if errorlevel N` で結果判定します。

## 基本

```bat
@echo off
exit /b 0
```

## 実用例

```bat
@echo off
setlocal

call :doWork
if errorlevel 1 (
  echo failed
  exit /b 1
)
echo success
exit /b 0

:doWork
dir not_exists.txt >nul 2>&1
if errorlevel 1 exit /b 1
exit /b 0
```

## 注意点

- `if errorlevel 1` は「1以上」で真になる。等価判定したい場合は順番に高い値から比較する。
- `exit`（`/b` なし）は cmd セッション自体を終了するので、通常は `exit /b` を使う。

## 関連

- `/batch/if`
- `/batch/redirection`

