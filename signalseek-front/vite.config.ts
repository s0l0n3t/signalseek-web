import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://renart-backend-gpzb.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.error('[PROXY ERROR]', err)
          })
          proxy.on('proxyReq', (req) => {
            console.log(`[PROXY] ${req.method} ${req.path}`)
          })
          proxy.on('proxyRes', (proxyRes) => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*'
          })
        },
      }
    }
  },
  plugins: [react(), tailwindcss()],
})