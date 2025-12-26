import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 중요: 깃허브 주소의 뒷부분인 /airport-cctv/를 정확히 입력해야 합니다.
  base: '/airport-cctv/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  }
});