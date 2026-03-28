import { getCollection } from "astro:content";

type Candidate = {
  title: string;
  summary: string;
  aliases: string[];
  tags: string[];
  type: "command" | "batch" | "topic";
  path: string;
};

function toEntryUrl(type: Candidate["type"], slug: string): string {
  if (type === "command") return `/commands/${slug}/`;
  if (type === "batch") return `/batch/${slug}/`;
  return `/topics/${slug}/`;
}

function toRouteSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/i, "");
}

export async function GET() {
  const [commands, batch, topics] = await Promise.all([
    getCollection("commands"),
    getCollection("batch"),
    getCollection("topics"),
  ]);

  const filteredCommands = commands.filter((entry) => !entry.id.startsWith("_"));
  const filteredBatch = batch.filter((entry) => !entry.id.startsWith("_"));
  const filteredTopics = topics.filter((entry) => !entry.id.startsWith("_"));

  const candidates: Candidate[] = [
    ...filteredCommands.map((entry) => ({
      title: entry.data.title,
      summary: entry.data.summary,
      aliases: entry.data.aliases ?? [],
      tags: entry.data.tags ?? [],
      type: "command" as const,
      path: toEntryUrl("command", toRouteSlug(entry.id)),
    })),
    ...filteredBatch.map((entry) => ({
      title: entry.data.title,
      summary: entry.data.summary,
      aliases: entry.data.aliases ?? [],
      tags: entry.data.tags ?? [],
      type: "batch" as const,
      path: toEntryUrl("batch", toRouteSlug(entry.id)),
    })),
    ...filteredTopics.map((entry) => ({
      title: entry.data.title,
      summary: entry.data.summary,
      aliases: entry.data.aliases ?? [],
      tags: entry.data.tags ?? [],
      type: "topic" as const,
      path: toEntryUrl("topic", toRouteSlug(entry.id)),
    })),
  ];

  return new Response(JSON.stringify({ candidates }), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}

