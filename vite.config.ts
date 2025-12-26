import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 1. 이 줄이 반드시 있어야 합니다.

export default defineConfig({
  // GitHub Pages 리포지토리 이름 설정
  base: '/airport-cctv/',
  
  // 2. React 플러그인을 추가해야 React 문법을 해석할 수 있습니다.
  plugins: [react()], 
  
  build: {
    outDir: 'dist',
    // 파일 경로를 상대 경로로 빌드하도록 설정 (안전성 확보)
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
  }
});
