import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        notFound: new URL('./404.html', import.meta.url).pathname,
      },
    },
  },
})
