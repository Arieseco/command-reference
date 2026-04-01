---
title: 文字列操作
type: batch
tags: [batch, variables]
aliases: [置換, 部分文字列]
summary: 変数置換と部分文字列抽出で文字列を加工する方法。
---

# 文字列操作

## 概要

- バッチでは `%VAR:old=new%` と `%VAR:~start,len%` で文字列加工ができます。

## 基本

```bat
@echo off
set NAME=command-dictionary
echo %NAME:command=cmd%
```

## 実用例

```bat
@echo off
setlocal

set FILE=report_2026-04-01.log
set BASE=%FILE:~0,10%
set EXT=%FILE:~-3%
echo base=%BASE%
echo ext=%EXT%
```

## 注意点

- `%VAR%` 展開は行単位なので、ループ内で更新値を扱うときは遅延展開を検討する。
- 置換対象が空文字になるケースを考慮して、事前に `if defined` で確認すると安全。

## 関連

- `/batch/variables`
- `/batch/delayed-expansion`

