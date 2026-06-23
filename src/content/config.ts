import { defineCollection, z } from 'astro:content';

// Case studies — one .mdx per project. Powers the "Work" section.
const caseStudies = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      client: z.string(),
      title: z.string(),
      summary: z.string().optional(),
      result: z.string(), // short label shown as the "url"/result chip
      url: z.string().default('#'),
      // 'web' = browser-framed screenshot card. 'logo' = brand-plate card + brand-sheet page.
      kind: z.enum(['web', 'logo']).default('web'),
      image: image().optional(), // relative path, e.g. ../../assets/work/entre.png
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // Logo work: the four logo treatments shown on the brand plate + brand sheet.
      // `mark` (monogram) is the typographic fallback when no logo art is supplied.
      mark: z.string().optional(),
      logo: z
        .object({
          primary: image(),
          reversed: image().optional(),
          monochrome: image().optional(),
          appIcon: image().optional(),
        })
        .optional(),
      palette: z.array(z.object({ name: z.string(), value: z.string() })).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false), // hidden in production builds, visible in dev
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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      readTime: z.string(),
      publishDate: z.coerce.date(),
      image: image().optional(), // relative path, e.g. ../../assets/blog/slug.png
      imageAlt: z.string().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { 'case-studies': caseStudies, services, blog };
