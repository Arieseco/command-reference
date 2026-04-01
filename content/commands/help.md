---
title: help
type: command
tags: [reference, basic]
aliases: [ヘルプ]
summary: コマンドの構文と簡易説明を表示する。
---

# help

## 概要

- 組み込みコマンドや一部外部コマンドの使い方を確認できます。

## 代表的な使い方

```cmd
help
```

```cmd
help copy
```

## オプションを使用した例

```cmd
help xcopy
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `<command>` | 指定したコマンドのヘルプを表示する |

## よくある落とし穴

- すべての実行ファイルが `help` 対応しているわけではない
- 詳細オプションは `command /?` のほうが新しい場合がある

## 関連

- `/commands/echo`
- `/commands/copy`
