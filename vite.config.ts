
import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages 리포지토리 이름에 맞게 경로를 설정합니다.
  base: '/airport-cctv/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
});
