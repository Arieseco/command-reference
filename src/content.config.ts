import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string().min(1),
  tags: z.array(z.string()).default([]),
  aliases: z.array(z.string()).default([]),
  summary: z.string().min(1),
});

const commands = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/commands" }),
  schema: baseSchema.extend({
    type: z.literal("command"),
  }),
});

const batch = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/batch" }),
  schema: baseSchema.extend({
    type: z.literal("batch"),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/topics" }),
  schema: baseSchema.extend({
    type: z.literal("topic"),
  }),
});

export const collections = {
  commands,
  batch,
  topics,
};

