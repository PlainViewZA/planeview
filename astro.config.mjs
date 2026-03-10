import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.planeview.co.za',
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: 'lightningcss'
    }
  },
  integrations: [sitemap()]
});