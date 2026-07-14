import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// VITE_BASE_PATH is set by GitHub Actions to the repo name (e.g. /my-repo/).
// Locally it defaults to '/' so the dev server works without configuration.
const base = process.env.VITE_BASE_PATH ?? '/'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base,
  server: {
    // Proxy DashScope API calls in dev to avoid CORS restrictions.
    // In production the request goes to the URL configured in settings,
    // which should point to a CORS-enabled proxy (see docs/cors-proxy.md).
    proxy: {
      '/dashscope-proxy': {
        target: 'https://dashscope.aliyuncs.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dashscope-proxy/, ''),
        secure: true,
      },
    },
  },
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
