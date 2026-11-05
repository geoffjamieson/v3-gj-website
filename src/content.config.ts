import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      // Position in the Work list on the home page
      order: z.number(),
      role: z.string(),
      dates: z.string(),
      // Full stack, shown on the case study page
      stack: z.array(z.string()),
      // Shorter stack, shown on the home page Work list
      homeStack: z.array(z.string()),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      // Path under public/, e.g. /videos/gtheme/gt-cli-demo.mp4
      heroVideo: z.string().optional(),
      // What the hero video shows, read by screen readers and used as its caption in the gallery
      heroLabel: z.string().optional(),
      // Screenshot shown with the project in the home page Work list
      cover: image(),
    }),
});

export const collections = { 'case-studies': caseStudies };
