import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/radiant-buddha-/',  // <-- VERY IMPORTANT for GitHub Pages
  server: {
    host: 'localhost',
    port: 5173,
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
});
