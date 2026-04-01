---
title: goto / call :label
type: batch
tags: [batch, control-flow]
aliases: [疑似関数, ラベルジャンプ]
summary: goto と call :label を使って処理を分割する方法。
---

# goto / call :label

## 概要

- `goto` はラベルへ無条件ジャンプします。
- `call :label` はラベルをサブルーチンのように呼び、`exit /b` で戻れます。

## 基本

```bat
@echo off
echo start
goto :skip
echo this line is skipped
:skip
echo end
```

## 実用例

```bat
@echo off
setlocal

call :log "backup start"
call :log "copy files"
call :log "backup end"
goto :eof

:log
echo [%date% %time%] %~1
exit /b 0
```

## 注意点

- `goto` を多用すると流れを追いづらくなるため、分割には `call :label` を優先する。
- `call :label` 内で `exit` を使うとシェルごと終了するので、戻るときは `exit /b` を使う。

## 関連

- `/batch/exit-codes`
- `/batch/if`

