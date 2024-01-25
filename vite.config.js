// const { resolve } = require('path');
import { resolve } from 'path';

module.exports = {
  plugins: [],
  root: resolve('./assets'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 5173,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json', 'jsx'],
  },
  build: {
    outDir: resolve('./assets/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./assets/js/main.jsx'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
