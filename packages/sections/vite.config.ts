import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../dist'),
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@openeuler': path.resolve(__dirname, 'src/components/openeuler'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `
        @use "@/assets/style/mixin/screen.scss" as *;
        @use "@/assets/style/mixin/font.scss" as *;
        @use "@/assets/style/mixin/common.scss" as *;`,
      },
    },
  },
  plugins: [vue({})],
  server: {
    proxy: {},
  },
});
