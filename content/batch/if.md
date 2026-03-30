---
title: if
type: batch
tags: [batch, control-flow]
aliases: [条件分岐]
summary: 条件に応じて処理を分岐するための構文。
---

# if

## 概要

- 文字列比較、存在チェック、`errorlevel` 判定などで処理を分岐できます。

## 基本

```bat
@echo off
if exist sample.txt (
  echo found
) else (
  echo not found
)
```

## 実用例

```bat
@echo off
setlocal

if /i "%~1"=="prod" (
  echo production mode
) else (
  echo development mode
)

endlocal
```

## 注意点

- 比較対象に空白があり得るので引用符で囲むのが安全
- `if errorlevel N` は「N以上」で真になる点に注意

## 関連

- `/batch/for/`

