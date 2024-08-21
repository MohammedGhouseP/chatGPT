import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import openai from 'openai'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['openai']
  }
})

