import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    cors: false,
    proxy: {
      '/api': {
        target: 'http://signalseek.xyz:8180',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(),tailwindcss()],
  
})
