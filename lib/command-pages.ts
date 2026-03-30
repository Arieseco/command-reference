import { COMMAND_NAV_ITEMS } from "@/app/components/layout/nav-config";

export type CommandArticle = {
  slug: string;
  title: string;
  href: string;
};

export const COMMAND_ARTICLES: CommandArticle[] = COMMAND_NAV_ITEMS.map((item) => ({
  slug: item.slug,
  title: item.label,
  href: item.href,
}));

export function getCommandArticle(slug: string): CommandArticle | undefined {
  return COMMAND_ARTICLES.find((item) => item.slug === slug);
}
