// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss({
      plugins: [typography()]
    })]
  },

  adapter: cloudflare(),
  integrations: [sitemap()]
});