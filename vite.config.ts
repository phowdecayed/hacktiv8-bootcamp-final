import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Set the base path for production
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    svgLoader({
      defaultImport: 'url' // or 'raw'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/picsum\.photos\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'placeholder-images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 Days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      manifest: {
        name: 'MINIMALIST',
        short_name: 'MINIMALIST',
        description: 'A modern single-page application.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router') || id.includes('pinia')) {
              return 'vue-core'
            }
            if (
              id.includes('embla-carousel-vue') ||
              id.includes('@tanstack/vue-table') ||
              id.includes('lucide-vue-next') ||
              id.includes('class-variance-authority') ||
              id.includes('tailwind-merge') ||
              id.includes('vue-sonner')
            ) {
              return 'ui-libs'
            }
            if (
              id.includes('axios') ||
              id.includes('date-fns') ||
              id.includes('@vueuse/core') ||
              id.includes('motion-v')
            ) {
              return 'utils'
            }
            if (id.includes('tsparticles')) {
              return 'vendor-particles'
            }
            return 'vendor' // Fallback for other vendors
          }
        }
      }
    }
  }
})
