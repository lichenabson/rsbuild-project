import { defineConfig } from '@rsbuild/core';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'

export default defineConfig({
  output: {
    minify: false,
  },
  tools: {
    rspack(config, { appendPlugins }) {
      config.externalsType = 'script';
      config.externals = {
        react: `React@https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js`,
      }
      if (process.env.RSDOCTOR === 'true') {
        appendPlugins(
          new RsdoctorRspackPlugin({
            linter: {
              rules: {
                'ecma-version-check': ['Error', { highestVersion: 'ES5', ignore: [] }],
              },
            },
          })
        )
      }
    },
  },
});
