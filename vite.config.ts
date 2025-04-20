import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/wedding-invite/', // 반드시 레포 이름과 일치!
  plugins: [react()],
});
