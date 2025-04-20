import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.VITE_DEPLOY_TARGET === 'gh-pages';

export default defineConfig({
  base: isGitHubPages ? '/wedding-invite/' : './', // ✅ GitHub Pages vs Netlify
  plugins: [react()],
});