#
---
title: 記事バックログ
type: backlog
tags: [planning]
aliases: [記事候補, backlog, TODO]
summary: コマンド/バッチ/topics の記事候補一覧（書いた/未作成をチェックで管理）。
---

# 記事バックログ

このページは「書いた/まだ」を管理するためのチェックリストです。

- コマンド記事は `docs/commands/<name>.md`（予定）
- バッチ/トピックは `docs/batch/` / `docs/topics/`（予定）
- 命名は原則「小文字+ハイフン」（規約：`CODING_STANDARDS.md`）

## コマンド（commands）

### 基本（入出力/表示）

- [x] `help`
- [x] `echo`
- [x] `cls`
- [x] `prompt`
- [x] `title`
- [x] `color`
- [ ] `ver`
- [x] `set`
- [ ] `setx`
- [ ] `path`
- [ ] `call`
- [ ] `exit`

### ファイル/ディレクトリ操作

- [x] `cd` / `chdir`
- [x] `dir`
- [ ] `md` / `mkdir`
- [ ] `rd` / `rmdir`
- [x] `copy`
- [ ] `xcopy`
- [ ] `robocopy`
- [ ] `move`
- [ ] `del` / `erase`
- [ ] `ren` / `rename`
- [ ] `type`
- [ ] `more`
- [ ] `fc`
- [ ] `find`
- [ ] `findstr`
- [ ] `sort`
- [ ] `attrib`
- [ ] `assoc`
- [ ] `ftype`
- [ ] `tree`

### アーカイブ/展開（Windows標準で触れる範囲）

- [ ] `compact`
- [ ] `expand`
- [ ] `makecab`

### ネットワーク

- [ ] `ipconfig`
- [ ] `ping`
- [ ] `tracert`
- [ ] `pathping`
- [ ] `nslookup`
- [ ] `netstat`
- [ ] `arp`
- [ ] `route`
- [ ] `getmac`
- [ ] `hostname`
- [ ] `net`
- [ ] `netsh`

### プロセス/タスク/サービス

- [ ] `tasklist`
- [ ] `taskkill`
- [ ] `sc`
- [ ] `schtasks`
- [ ] `timeout`
- [ ] `start`

### 権限/ユーザー/セキュリティ

- [ ] `whoami`
- [ ] `runas`
- [ ] `icacls`
- [ ] `takeown`
- [ ] `cipher`
- [ ] `certutil`

### ディスク/ストレージ

- [ ] `diskpart`
- [ ] `chkdsk`
- [ ] `format`
- [ ] `vol`
- [ ] `label`
- [ ] `mountvol`
- [ ] `defrag`
- [ ] `fsutil`

### システム情報/診断

- [ ] `systeminfo`
- [ ] `driverquery`
- [ ] `wevtutil`
- [ ] `perfmon`（起動用途）
- [ ] `eventcreate`

### レジストリ

- [ ] `reg`

### 文字コード/ロケール

- [ ] `chcp`

### リモート/共有

- [ ] `net use`
- [ ] `net share`
- [ ] `mstsc`（起動用途）

## バッチ文法（batch）

- [x] 変数（`set`、`%VAR%`）
- [x] 遅延環境変数展開（`setlocal enabledelayedexpansion`）
- [x] `if`（`errorlevel`、文字列比較、存在判定）
- [x] `for`（基本/`for /f`/トークン/遅延展開との関係）
- [x] `goto` / `call :label`（疑似関数）
- [x] リダイレクト（`>`, `>>`, `2>`, `2>&1`）
- [x] パイプ（`|`）とエスケープ（`^`）
- [x] 文字列操作（置換/部分文字列）
- [x] 引数（`%1`〜、`shift`、`%*`）
- [x] 終了コード（`exit /b`、`errorlevel`）

## 横断トピック（topics）

- [ ] 文字コードと文字化け（`chcp`、UTF-8、ファイル/コンソール）
- [ ] クォート/エスケープの基礎（cmd.exeの癖）
- [ ] パスの扱い（絶対/相対、UNC、長いパス）
- [ ] 破壊的コマンドの安全な使い方（dry-runの型）

