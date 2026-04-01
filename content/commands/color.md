---
title: color
type: command
tags: [console, customization]
aliases: [配色変更]
summary: コンソールの文字色と背景色を変更する。
---

# color

## 概要

- コマンドプロンプトの配色を 16 進 2 桁で指定します。

## 代表的な使い方

```cmd
color 0a
```

```cmd
color 1f
```

## オプションを使用した例

```cmd
color /?
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `<xy>` | `x` が背景色、`y` が文字色（16進） |
| `/ ?` | ヘルプを表示する |

## よくある落とし穴

- 背景色と文字色を同じ値にすると読めなくなる
- ターミナル設定側のテーマにより見え方が異なる

## 関連

- `/commands/cls`
- `/commands/prompt`
