---
title: bcdedit
type: command
tags: [windows, boot, advanced]
aliases: []
summary: BCD（Boot Configuration Data）を表示・編集する。ブートローダーやセーフモードなどの起動設定を扱う。
---

# bcdedit

## 概要

- **Windows の起動設定（BCD）** を表示・追加・変更・削除します。ブートメニューの既定 OS、タイムアウト、セーフブート、ハイパーバイザーの有無などを操作できます。**管理者権限のコマンドプロンプト** で実行するのが一般的です。

## 代表的な使い方

```cmd
REM 現在の BCD エントリ一覧を表示
bcdedit /enum all
```

```cmd
REM 既定のブートエントリを表示
bcdedit /enum {current}
```

## オプションを使用した例

```cmd
REM ブートメニューの表示時間を 15 秒に
bcdedit /timeout 15
```

```cmd
REM 次回のみセーフブート（ネットワーク）を有効にする例（要: 識別子の確認）
bcdedit /set {current} safeboot network
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `/enum [all\|active\|...]` | エントリの列挙 |
| `/copy` / `/create` / `/delete` | エントリの複製・作成・削除 |
| `/set <id> <option> <value>` | 指定エントリのオプションを設定 |
| `/default <id>` | 既定のブートエントリ |
| `/timeout <秒>` | ブートメニューの待ち時間 |
| `/export` / `/import` | BCD のバックアップ・復元 |

## よくある落とし穴

- `{current}` など **GUID は環境ごとに異なる** — 必ず `/enum` で確認する
- 誤設定すると **起動できなくなる** ため、変更前に `/export` でバックアップを推奨

## 関連

- `/commands/bcdboot/`
