---
title: copy
type: command
tags: [filesystem]
aliases: [コピー, 複製]
summary: ファイルをコピーする基本コマンド。
---

# copy

## 概要

- ファイルを別名または別場所へコピーします。

## 代表的な使い方

```cmd
copy a.txt b.txt
```

```cmd
copy .\src\log.txt .\backup\
```

## オプションを使用した例

```cmd
copy /y .\src\log.txt .\backup\log.txt
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `/y` | 上書き確認を表示しない |
| `/-y` | 上書き確認を表示する |

## よくある落とし穴

- パスの末尾 `\` や引用符の有無で挙動が分かりづらい
- ディレクトリ単位の大量コピーは `xcopy` / `robocopy` の方が向く

## 関連

- `/commands/xcopy/`

