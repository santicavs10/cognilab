import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cognilab.com.ar',
  integrations: [sitemap()],
});