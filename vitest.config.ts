import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vitest-specific configuration, separate from vite.config.ts so that
// `tsc -b` (which type-checks vite.config.ts via tsconfig.node.json) never
// sees the `test:` key and doesn't trigger the rolldown / rollup type mismatch.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
})
