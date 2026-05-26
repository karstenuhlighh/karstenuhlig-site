import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const sharedSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  excerpt: z.string(),
  draft: z.boolean().default(false),
});

const ecommerceMarketing = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/e-commerce-marketing",
  }),
  schema: sharedSchema,
});

const martech = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/martech" }),
  schema: sharedSchema,
});

const agenticAi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/agentic-ai" }),
  schema: sharedSchema.extend({
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  "e-commerce-marketing": ecommerceMarketing,
  martech,
  "agentic-ai": agenticAi,
};
