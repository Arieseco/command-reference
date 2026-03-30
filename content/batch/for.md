---
title: for
type: batch
tags: [batch, loop]
aliases: [ループ, 反復]
summary: ファイル列挙や数値反復を行うバッチのループ構文。
---

# for

## 概要

- ファイル集合や数値範囲に対して繰り返し処理を行います。

## 基本

```bat
@echo off
for %%F in (*.log) do echo %%F
```

## 実用例

```bat
@echo off
setlocal enabledelayedexpansion

for /l %%N in (1,1,5) do (
  set VALUE=%%N
  echo step !VALUE!
)

endlocal
```

## 注意点

- バッチ内では `%%A`、対話実行では `%A` と `%` の数が異なる
- ブロック内で変数更新を見るなら遅延展開を使う

## 関連

- `/batch/if/`

