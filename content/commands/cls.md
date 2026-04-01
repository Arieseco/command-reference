---
title: cls
type: command
tags: [console, basic]
aliases: [画面クリア]
summary: コンソール画面の表示内容を消去する。
---

# cls

## 概要

- 現在のコマンドプロンプト画面をクリアします。

## 代表的な使い方

```cmd
cls
```

```cmd
echo 途中ログ
cls
echo 再表示
```

## オプションを使用した例

```cmd
REM cls には実質的なオプションはありません
cls
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| なし | 引数なしで実行する |

## よくある落とし穴

- 画面表示が消えるだけで、実行履歴やログファイルは消えない
- リモートセッションでは表示更新が遅れる場合がある

## 関連

- `/commands/prompt`
- `/commands/title`
