
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/uts-paw/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
})
