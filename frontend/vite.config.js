import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pwaConfig } from './src/config/pwa.config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
   pwaConfig,
    tailwindcss(),
  ],
  server:{
    host:true
  },
})
