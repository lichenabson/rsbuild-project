import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  output: {
    minify: false,
  },
  tools: {
    rspack: {
      externalsType: 'script',
      externals: {
        react: `React@https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js`,
      },
    },
  },
});
