import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter from 'vue-router/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: "/vue3-sandbox/router5-file-based-routing-sandbox/",
  plugins: [
    // file based routingのためにVueRouterを追加
    VueRouter(),
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: '../docs/router5-file-based-routing-sandbox',
  },
})
