import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/projects" }),
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

const halmetojaModel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/halmetoja-model" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    layout: z.string().optional(),
  }),
});

export const collections = { articles, projects, "halmetoja-model": halmetojaModel };
