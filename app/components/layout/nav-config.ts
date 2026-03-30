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
  { slug: "copy", label: "copy", href: "/commands/copy" },
  { slug: "dir", label: "dir", href: "/commands/dir" },
  { slug: "echo", label: "echo", href: "/commands/echo" },
  { slug: "set", label: "set", href: "/commands/set" },
];

export const BATCH_NAV_ITEMS: BatchNavItem[] = [
  { slug: "delayed-expansion", label: "delayed-expansion", href: "/batch/delayed-expansion" },
  { slug: "for", label: "for", href: "/batch/for" },
  { slug: "if", label: "if", href: "/batch/if" },
  { slug: "variables", label: "variables", href: "/batch/variables" },
];

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "start",
    label: "はじめに",
    items: [
      { label: "概要", href: "/" },
      { label: "検索", href: "/search" },
    ],
  },
];
