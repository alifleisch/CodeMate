import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../docs',
  },
  publicDir: 'public',
  plugins: [react()],
})
