import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    cors: {
        origin: 'https://renart-backend-gpzb.onrender.com'
    }
  },
  plugins: [react(), tailwindcss()],
})