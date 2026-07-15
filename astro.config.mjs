// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://app.tourdao.vn',

  // Static output (default) — perfect for Cloudflare Pages
  output: 'static',

  adapter: cloudflare(),
});