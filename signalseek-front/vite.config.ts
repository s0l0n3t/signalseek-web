import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://signalseek.xyz:8180',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/prod'), // /api → /prod dönüşümü
        configure: (proxy) => {
          proxy.on('proxyRes', (proxyRes) => {
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
            proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE';
          });
        }
      }
    }
  },
  plugins: [react(), tailwindcss()],
})