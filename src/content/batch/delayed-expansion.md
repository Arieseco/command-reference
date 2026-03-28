---
title: 遅延展開
type: batch
tags: [batch, env, advanced]
aliases: [enabledelayedexpansion, "!VAR!"]
summary: ループや if ブロック内で最新の変数値を扱うための仕組み。
---

# 遅延展開

## 概要

- `setlocal enabledelayedexpansion` を使うと、`!VAR!` で実行時の最新値を参照できます。

## 基本

```bat
@echo off
setlocal enabledelayedexpansion
set COUNT=0
set /a COUNT+=1
echo !COUNT!
endlocal
```

## 実用例

```bat
@echo off
setlocal enabledelayedexpansion

set N=0
for %%F in (*.txt) do (
  set /a N+=1
  echo [!N!] %%F
)

endlocal
```

## 注意点

- ループ内で `%N%` を使うと初期値のまま見えることがある
- `!` を含む文字列を扱うときは副作用に注意

## 関連

- `/batch/variables/`

