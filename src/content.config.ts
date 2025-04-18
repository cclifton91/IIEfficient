import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: "src/content/projects/**/*.md" }),
    schema: ({ image }) =>
      z.object({
        slug:        z.string(),
        title:       z.string(),
        description: z.string(),
        featured:    z.boolean().optional(),
        tag:         z.array(z.string()).optional(),
        coverImg:    image(),          
        coverAlt:    z.string().optional(),
        video:       z.string().optional(),
      }),
  }),
};

