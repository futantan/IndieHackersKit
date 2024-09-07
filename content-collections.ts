import { defineCollection, defineConfig } from "@content-collections/core";

const tools = defineCollection({
  name: "tools",
  directory: "src/tools",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    icon: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

export default defineConfig({
  collections: [tools],
});
