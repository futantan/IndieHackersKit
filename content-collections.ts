import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    icon: z.string(),
    summary: z.string(),
    tag: z.array(z.string()),
  }),
});

export default defineConfig({
  collections: [posts],
});
