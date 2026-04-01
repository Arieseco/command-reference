---
title: prompt
type: command
tags: [console, customization]
aliases: [プロンプト文字列]
summary: コマンドプロンプトの表示形式を変更する。
---

# prompt

## 概要

- `C:\>` のようなプロンプト表示をカスタマイズします。

## 代表的な使い方

```cmd
prompt $p$g
```

```cmd
prompt [$t] $p$g
```

## オプションを使用した例

```cmd
prompt $d $t $_$p$g
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `$p` | 現在のドライブとパス |
| `$g` | `>` 文字 |
| `$t` | 現在時刻 |
| `$_` | 改行 |

## よくある落とし穴

- 一時的な変更なので、新しいセッションでは元に戻る
- 文字列を長くしすぎると入力領域が狭くなる

## 関連

- `/commands/title`
- `/commands/cls`
