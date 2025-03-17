import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "./src"),
      "@layouts": path.resolve(__dirname, "./src/components/layout"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@reusables": path.resolve(__dirname, "./src/components/reusables"),
      "@env": path.resolve(__dirname, "./src/env"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
