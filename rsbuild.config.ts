import { defineConfig } from '@rsbuild/core';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginSvgr } from '@rsbuild/plugin-svgr';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginLess(),
    pluginSass(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  dev: {
    progressBar: true,
    hmr:true,
    liveReload: true,
    assetPrefix: true,
    client: {
      overlay: true
    }
  },
  performance: {
    chunkSplit: {
      strategy: 'split-by-size',
      minSize: 20000,
    }
  },
  html: {
    template: './public/index.html'
  },
  output: {
    injectStyles: false,
    dataUriLimit: 0,
    distPath: {
      svg: 'svg'
    },
    sourceMap: {
      js: 'source-map'
    }
  }
})