---
title: title
type: command
tags: [console, basic]
aliases: [タイトル変更]
summary: コマンドプロンプトのウィンドウタイトルを変更する。
---

# title

## 概要

- 実行中のコマンドプロンプトウィンドウのタイトルを変更します。

## 代表的な使い方

```cmd
title Build Runner
```

```cmd
title Backup Job - Nightly
```

## オプションを使用した例

```cmd
title [%date% %time%] Task Window
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `<文字列>` | 新しいタイトル文字列 |

## よくある落とし穴

- セッション単位の変更で、ウィンドウを閉じると消える
- バッチで頻繁に変えるとちらついて見えることがある

## 関連

- `/commands/prompt`
- `/commands/start`
