import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tum-albanian-students.github.io',
  integrations: [sitemap()],
});
