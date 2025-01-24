import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      draft: z.boolean().optional(),
      cover: image(),
      description: z.string(),
      video: z.string().optional(), // New field for video uploads
    }),
});

export const collections = { projects };