---
title: パイプとエスケープ
type: batch
tags: [batch, io]
aliases: [pipe, caret]
summary: パイプ(|)とエスケープ(^)の使い分けを整理する。
---

# パイプとエスケープ

## 概要

- `|` は左コマンドの標準出力を右コマンドへ渡します。
- `^` は cmd の特殊文字を文字として扱いたいときに使います。

## 基本

```bat
@echo off
dir /b | findstr /i ".log"
```

## 実用例

```bat
@echo off
setlocal

echo A^|B^|C> data.txt
type data.txt | findstr /c:"A|B"
```

## 注意点

- バッチ内で `|`, `>`, `<`, `&`, `(`, `)` をそのまま使うと構文として解釈される。
- `for /f` とパイプを組み合わせるときは引用符の入れ子に注意する。

## 関連

- `/batch/redirection`
- `/batch/for`

