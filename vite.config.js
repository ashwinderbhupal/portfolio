import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    // Cloudflare quick tunnel (npm run share) uses a random *.trycloudflare.com host
    allowedHosts: ['.trycloudflare.com'],
  },
})
