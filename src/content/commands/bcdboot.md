---
title: bcdboot
type: command
tags: [windows, boot, advanced]
aliases: []
summary: システムパーティションにブート環境ファイルをコピーし、起動構成を整える。通常はイメージ適用や修復時に使う。
---

# bcdboot

## 概要

- **BCD（Boot Configuration Data）用のブートファイル** を、指定したボリュームへ配置します。Windows のセットアップや `dism` で展開したイメージを起動可能にするときなどに使います。多くの操作は **管理者として実行したコマンドプロンプト** が前提です。

## 代表的な使い方

```cmd
REM 現在のシステムから、S: をシステム用としてブートファイルを書き込む（例）
bcdboot S:\Windows
```

```cmd
REM UEFI 用にファームウェアブートマネージャーを更新する例
bcdboot S:\Windows /f UEFI
```

## オプションを使用した例

```cmd
REM ブートローダーのみ再作成し、既定のロケールを指定
bcdboot S:\Windows /l ja-jp
```

## オプション / 引数

| 要素 | 説明 |
| --- | --- |
| `<パス>` | 通常は `Windows` フォルダがあるパス（例: `S:\Windows`） |
| `/s <ボリューム>` | EFI システムパーティションに EFI ブートファイルを書き込む |
| `/f <firmware>` | `UEFI` または `BIOS` に合わせてファームウェア項目を更新 |
| `/l <locale>` | BCD のロケール |
| `/v` | 詳細ログ |

## よくある落とし穴

- 対象ディスクの **パーティション構成（システム / MSR / Windows）** を誤ると起動しない
- 誤ったドライブに実行すると **別インストールのブートを壊す** 可能性がある

## 関連

- `/commands/bcdedit/`
