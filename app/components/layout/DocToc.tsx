"use client";

import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const HEADING_SELECTOR = "main article h1[id], main article h2[id], main article h3[id]";

function extractTocItems(): TocItem[] {
  if (typeof document === "undefined") return [];

  const headings = Array.from(document.querySelectorAll<HTMLElement>(HEADING_SELECTOR));
  return headings.map((heading) => ({
    id: heading.id,
    text: heading.textContent?.trim() || heading.id,
    level: Number(heading.tagName.slice(1)),
  }));
}

export default function DocToc() {
  const pathname = usePathname();
  const [items, setItems] = React.useState<TocItem[]>([]);
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const update = () => setItems(extractTocItems());
    update();
    const timer = window.setTimeout(update, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  React.useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLElement>(HEADING_SELECTOR));
    if (headings.length === 0) {
      setActiveId("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);

        if (visible.length > 0) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: [0, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <Box component="nav" aria-label="このページの目次">
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ display: "block", fontWeight: 700, letterSpacing: 0.12, mb: 1.5 }}
      >
        CONTENTS
      </Typography>

      {items.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          このページには目次対象の見出しがありません。
        </Typography>
      ) : (
        <Box component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
          {items.map((item) => {
            const selected = item.id === activeId;
            return (
              <Box component="li" key={item.id} sx={{ mb: 0.25 }}>
                <Link
                  href={`#${item.id}`}
                  underline="none"
                  color={selected ? "primary.main" : "text.primary"}
                  sx={{
                    display: "block",
                    py: 0.5,
                    px: 1,
                    ml: item.level === 1 ? 0 : item.level === 2 ? 1 : 2,
                    borderLeft: "2px solid transparent",
                    borderLeftColor: selected ? "primary.main" : "transparent",
                    bgcolor: selected ? (t) => alpha(t.palette.primary.main, 0.08) : "transparent",
                    borderRadius: 0.75,
                    fontSize: "0.85rem",
                    fontWeight: selected ? 600 : 400,
                    lineHeight: 1.45,
                  }}
                >
                  {item.text}
                </Link>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
