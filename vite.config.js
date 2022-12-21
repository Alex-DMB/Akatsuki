import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Akatsuki/',
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, './src/img/'),
      '@portraits': path.resolve(__dirname, './src/img/portraits'),
      '@renders': path.resolve(__dirname, './src/img/renders'),
      '@stages': path.resolve(__dirname, './src/img/stages'),
    },
  },
})
