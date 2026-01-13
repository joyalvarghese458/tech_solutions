import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this base configuration
  base: './',
  // Optional: Enable react devtools in production
  define: {
    'process.env': {}
  }
})