export type NavItem = {
  label: string;
  href: string;
};

export type NavSection = {
  id: string;
  label: string;
  items: NavItem[];
};

export type CommandNavItem = {
  slug: string;
  label: string;
  href: string;
};

export type BatchNavItem = {
  slug: string;
  label: string;
  href: string;
};

/** MUI ドキュ風のアクティブ判定（子パス含む） */
export function isNavPathActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const COMMAND_NAV_ITEMS: CommandNavItem[] = [
  { slug: "active", label: "active", href: "/commands/active" },
  { slug: "add", label: "add", href: "/commands/add" },
  { slug: "adprep", label: "adprep", href: "/commands/adprep" },
  { slug: "bcdboot", label: "bcdboot", href: "/commands/bcdboot" },
  { slug: "bcdedit", label: "bcdedit", href: "/commands/bcdedit" },
  { slug: "bdehdcfg", label: "bdehdcfg", href: "/commands/bdehdcfg" },
  { slug: "cd", label: "cd", href: "/commands/cd" },
  { slug: "cls", label: "cls", href: "/commands/cls" },
  { slug: "color", label: "color", href: "/commands/color" },
  { slug: "copy", label: "copy", href: "/commands/copy" },
  { slug: "dir", label: "dir", href: "/commands/dir" },
  { slug: "echo", label: "echo", href: "/commands/echo" },
  { slug: "help", label: "help", href: "/commands/help" },
  { slug: "prompt", label: "prompt", href: "/commands/prompt" },
  { slug: "set", label: "set", href: "/commands/set" },
  { slug: "title", label: "title", href: "/commands/title" },
];

export const BATCH_NAV_ITEMS: BatchNavItem[] = [
  { slug: "arguments", label: "arguments", href: "/batch/arguments" },
  { slug: "delayed-expansion", label: "delayed-expansion", href: "/batch/delayed-expansion" },
  { slug: "exit-codes", label: "exit-codes", href: "/batch/exit-codes" },
  { slug: "for", label: "for", href: "/batch/for" },
  { slug: "goto-call-label", label: "goto-call-label", href: "/batch/goto-call-label" },
  { slug: "if", label: "if", href: "/batch/if" },
  { slug: "pipe-escape", label: "pipe-escape", href: "/batch/pipe-escape" },
  { slug: "redirection", label: "redirection", href: "/batch/redirection" },
  { slug: "string-operations", label: "string-operations", href: "/batch/string-operations" },
  { slug: "variables", label: "variables", href: "/batch/variables" },
];

export const NAV_SECTIONS: NavSection[] = [
  // "はじめに" は廃止。独立ナビ（コマンド/バッチ）のみ表示する。
];
