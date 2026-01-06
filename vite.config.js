import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
    watch: {
      exclude: ['samples/**']
    }
  },
  server: {
    watch: {
      ignored: ['**/samples/**']
    }
  },
});
