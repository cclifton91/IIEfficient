import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


export const collections = {
  projects: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './src/content/projects',
    }),
    schema: ({ image }) =>
      z.object({
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

