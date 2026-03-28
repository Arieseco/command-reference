---
title: cd
type: command
tags: [filesystem]
aliases: [chdir, ディレクトリ移動]
summary: カレントディレクトリを表示・変更する。
---

# cd

## 概要

- 作業中のディレクトリを確認/変更します。

## 代表的な使い方

```cmd
cd
```

```cmd
cd C:\Windows
```

## オプションを使用した例

```cmd
cd /d D:\work
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `/d` | ドライブも同時に変更する |

## よくある落とし穴

- `cd D:\work` だけではドライブが変わらない場合がある（`/d` を使う）
- パスに空白があるときは引用符が必要

## 関連

- `/commands/dir/`

