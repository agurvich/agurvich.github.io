import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader';

import react from '@vitejs/plugin-react'

import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin({mode:Mode.HTML})
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'), // Alias for the 'src' directory
      "@": path.resolve(__dirname, "./src"),
      'crypto': 'crypto-browserify',
      'path': 'path-browserify',
      'stream': 'stream-browserify',
      'buffer': 'buffer'
    },
  }
})
