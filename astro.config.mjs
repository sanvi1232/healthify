// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sanvi1232.github.io',
  base: '/healthify',
  vite: {
    plugins: [tailwindcss()]
  }
});