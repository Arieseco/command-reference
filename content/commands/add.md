---
title: add
type: command
tags: [general, trial]
aliases: []
summary: 試験用サンプル。cmd 標準に「add」単体のコマンドはなく、多くは他コマンドのサブオプションとして使う。
---

# add

## 概要

- **cmd.exe の組み込みコマンドとして `add` 単体** を実行する、という形は一般的ではありません。「追加」を意味する操作は、`net` や `reg` など別コマンドの **オプションやサブコマンド** として現れることが多いです。

## 代表的な使い方

```cmd
REM ユーザ追加（例：管理者権限が必要な場合あり）
net user NewUser Password123 /add
```

```cmd
REM ローカルグループへユーザを追加（例）
net localgroup Users NewUser /add
```

## オプションを使用した例

```cmd
REM タスクへの引数追加などはツールごとに異なる
schtasks /Create /?
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `/add`（他コマンド内） | `net user` などで「追加」を指定する場合がある |
| 単体 `add` | 標準 cmd では想定されないことが多い |

## よくある落とし穴

- 「add」だけで検索すると PowerShell や Git、各種 CLI のサブコマンドばかりヒットする
- 本サイトでは **先頭文字 A の一覧試験** 用にエントリを置いている

## 関連

- `/commands/`
