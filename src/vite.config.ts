import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: Update the 'base' property for GitHub Pages deployment
// 
// For project pages (e.g., username.github.io/menu-match/):
//   base: '/menu-match/'  (replace with your actual repo name)
//
// For user/org pages (e.g., username.github.io):
//   base: '/'
//
export default defineConfig({
  plugins: [react()],
  typescriptbase: '/Menumatch/', // Replace with YOUR repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
