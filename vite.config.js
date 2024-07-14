
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
    base: '/Intro-React/',
    mimeTypes: {
      'application/javascript': ['js', 'jsx']
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  }
});
