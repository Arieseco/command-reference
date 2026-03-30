import fs from "node:fs/promises";
import path from "node:path";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { notFound } from "next/navigation";
import { COMMAND_ARTICLES, getCommandArticle } from "@/lib/command-pages";
import CopyableCodeBlock from "@/app/components/layout/CopyableCodeBlock";

type Params = {
  slug: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  return COMMAND_ARTICLES.map((item) => ({ slug: item.slug }));
}

async function readMarkdown(slug: string): Promise<string> {
  const filePath = path.join(process.cwd(), "content", "commands", `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf-8");
  return raw.replace(/^---[\s\S]*?---\s*/m, "");
}

function toAnchorText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toAnchorText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const childNode = (node as { props?: { children?: ReactNode } }).props?.children;
    return toAnchorText(childNode ?? "");
  }
  return "";
}

function slugifyHeading(text: string): string {
  const normalized = text.trim().replace(/\s+/g, " ");
  const cleaned = normalized
    .toLowerCase()
    // Unicode ??????????????????????????
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  if (cleaned.length > 0) return cleaned;

  // ???????????????????ID???
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash * 31 + normalized.charCodeAt(i)) >>> 0;
  }
  return `h-${hash.toString(16)}`;
}

const markdownComponents: Components = {
  h1: ({ children }) => {
    const id = slugifyHeading(toAnchorText(children));
    return (
      <Typography id={id} variant="h4" component="h1" fontWeight={700} sx={{ mt: 5, mb: 2 }}>
        {children}
      </Typography>
    );
  },
  h2: ({ children }) => {
    const id = slugifyHeading(toAnchorText(children));
    return (
      <Typography id={id} variant="h5" component="h2" fontWeight={700} sx={{ mt: 4, mb: 1.5 }}>
        {children}
      </Typography>
    );
  },
  h3: ({ children }) => {
    const id = slugifyHeading(toAnchorText(children));
    return (
      <Typography id={id} variant="h6" component="h3" fontWeight={700} sx={{ mt: 3, mb: 1 }}>
        {children}
      </Typography>
    );
  },
  p: ({ children }) => (
    <Typography component="p" variant="body1" sx={{ lineHeight: 1.8, mb: 1.6 }}>
      {children}
    </Typography>
  ),
  ul: ({ children }) => (
    <Box component="ul" sx={{ pl: 3, my: 1.2 }}>
      {children}
    </Box>
  ),
  ol: ({ children }) => (
    <Box component="ol" sx={{ pl: 3, my: 1.2 }}>
      {children}
    </Box>
  ),
  li: ({ children }) => (
    <Typography component="li" variant="body1" sx={{ lineHeight: 1.8, mb: 0.4 }}>
      {children}
    </Typography>
  ),
  code: ({ className, children }) => {
    // ???????? `language-` ??????????? `pre` ?? CopyableCodeBlock ???????
    const isInline = !Boolean(className?.includes("language-"));
    if (!isInline) return toAnchorText(children as ReactNode);

    return (
      <Box
        component="code"
        sx={{
          px: 0.6,
          py: 0.2,
          borderRadius: 0.6,
          bgcolor: "action.hover",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
          fontSize: "0.875em",
        }}
      >
        {children}
      </Box>
    );
  },
  pre: ({ children }) => <CopyableCodeBlock code={toAnchorText(children)} />,
};

export default async function CommandArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getCommandArticle(slug);

  if (!article) {
    notFound();
  }

  let markdown = "";
  try {
    markdown = await readMarkdown(slug);
  } catch {
    notFound();
  }

  return (
    <Box component="article">
      <Typography id={`command-${slug}`} variant="h4" component="h1" fontWeight={700} sx={{ mb: 1 }}>
        {article.title}
      </Typography>
      <Typography id="source" variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        source: <code>content/commands/{slug}.md</code>
      </Typography>

      <Box
        sx={{
          "& table": { width: "100%", borderCollapse: "collapse", my: 2 },
          "& th, & td": { border: 1, borderColor: "divider", p: 1, textAlign: "left" },
          "& th": { bgcolor: "action.hover" },
        }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {markdown}
        </ReactMarkdown>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Link href="/commands" underline="hover">
          {"<- "}Back to command list
        </Link>
      </Box>
    </Box>
  );
}
