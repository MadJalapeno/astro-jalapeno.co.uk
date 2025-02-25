import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import path from 'path';
import { fileURLToPath } from 'url';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import yaml from '@rollup/plugin-yaml';
import icon from 'astro-icon';
//import astroRemark from '@astrojs/markdown-remark';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({

  compressHTML: false, // Prevents minification in dev
  
  integrations: [
    tailwind({
      applyBaseStyles: false
      }), 
    mdx(), 
    icon(),
    sitemap(),
],  

  build: {
    inlineStylesheets: 'never',
  },

  vite: {
    plugins: [yaml()],
    assetsInclude: ['**/*.yml']
  }, 

  "routes": [
    { "src": "/posts/:page",
      "dest": "posts/:[page].astro"
    }
  ]
});