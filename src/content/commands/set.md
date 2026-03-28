---
title: set
type: command
tags: [env, batch]
aliases: [環境変数, 変数設定]
summary: 環境変数の表示・設定・削除を行う基本コマンド。
---

# set

## 概要

- 環境変数を表示・設定・削除します。バッチの基本です。

## 代表的な使い方

```cmd
set
```

```cmd
set NAME=VALUE
echo %NAME%
```

## オプションを使用した例

```cmd
set /a TOTAL=1+2+3
echo %TOTAL%
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `/a` | 算術式として評価する |
| `/p` | 入力を受け取り変数へ設定する |

## よくある落とし穴

- `set VAR =x` のように `=` 前後に空白を入れると意図しない変数名になる
- 遅延展開が必要な場面では `!VAR!` を使う

## 関連

- `/batch/`

