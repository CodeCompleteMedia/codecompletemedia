import { defineCollection, z } from 'astro:content';

// Case studies — one .mdx per project. Powers the "Work" section.
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    client: z.string(),
    title: z.string(),
    summary: z.string().optional(),
    result: z.string(), // short label shown as the "url"/result chip
    url: z.string().default('#'),
    image: z.string().optional(), // path under /public, e.g. /images/work/entre.png
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    publishDate: z.coerce.date().optional(),
  }),
});

// Services — one .mdx per service. Powers the services accordion + grid.
const services = defineCollection({
  type: 'content',
  schema: z.object({
    number: z.string(), // "01"…"06"
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    includes: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

// Blog — one .mdx per post. Powers /blog and the home "Insights" section.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    readTime: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { 'case-studies': caseStudies, services, blog };
