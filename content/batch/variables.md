---
title: 変数
type: batch
tags: [batch, env, basics]
aliases: [環境変数, set 変数]
summary: set で変数を定義し、%VAR% で参照するバッチの基本。
---

# 変数

## 概要

- `set` で変数を作成し、`%変数名%` で値を読み出します。

## 基本

```bat
@echo off
set NAME=World
echo Hello %NAME%
```

## 実用例

```bat
@echo off
setlocal

set LOG_DIR=%~dp0logs
set LOG_FILE=%LOG_DIR%\app.log
echo output path: %LOG_FILE%

endlocal
```

## 注意点

- `set VAR =x` のように `=` 周辺へ空白を入れると別名扱いになりやすい
- `cmd.exe` 標準の書式。PowerShell 変数とは別物

## 関連

- `/commands/set/`

