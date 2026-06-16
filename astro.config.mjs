// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://codecompletemedia.com',
  // Static by default. The contact API route opts into on-demand rendering
  // via `export const prerender = false`, served by the Vercel adapter.
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      // We ship a hand-tuned design system in src/styles/global.css and
      // scoped component styles, so Tailwind's preflight reset is disabled
      // to avoid clobbering it. Utilities remain available where useful.
      applyBaseStyles: false,
    }),
  ],
});
