import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adithyasrinivasan3112.github.io',
  base: '/strategy-circle-claude',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
