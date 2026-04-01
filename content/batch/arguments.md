---
title: 引数
type: batch
tags: [batch, parameters]
aliases: [%1, shift, %*]
summary: バッチ引数の受け取りと shift による走査方法。
---

# 引数

## 概要

- バッチファイルには `%1` から `%9`、全引数 `%*` でアクセスできます。

## 基本

```bat
@echo off
echo arg1=%1
echo arg2=%2
```

## 実用例

```bat
@echo off
setlocal

:loop
if "%~1"=="" goto :done
echo token=%~1
shift
goto :loop

:done
echo all=%*
```

## 注意点

- `%1` は引用符付きで渡されることがあるため、`%~1` で外して扱うと便利。
- `shift` 後は元の `%1` が失われるため、必要なら先に退避する。

## 関連

- `/batch/goto-call-label`
- `/batch/if`

