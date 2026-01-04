import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["idea", "active", "paused", "done"]).default("active"),
    tags: z.array(z.string()).default([]),
    year: z.number().optional(),
    links: z
      .object({
        website: z.string().url().optional(),
        repo: z.string().url().optional(),
        docs: z.string().url().optional(),
        amazon: z.string().url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };