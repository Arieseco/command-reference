import { BATCH_NAV_ITEMS } from "@/app/components/layout/nav-config";

export type BatchArticle = {
  slug: string;
  title: string;
  href: string;
};

export const BATCH_ARTICLES: BatchArticle[] = BATCH_NAV_ITEMS.map((item) => ({
  slug: item.slug,
  title: item.label,
  href: item.href,
}));

export function getBatchArticle(slug: string): BatchArticle | undefined {
  return BATCH_ARTICLES.find((item) => item.slug === slug);
}

