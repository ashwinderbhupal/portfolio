// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',        // <- your repo name for GitHub Pages
  // If you kept some files as .js but they contain JSX, uncomment:
//  esbuild: { loader: 'jsx', include: /src\/.*\.js?$/ },
})
