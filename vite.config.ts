import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // allow imports like `import X from 'src/...'`
      src: path.resolve(__dirname, 'src'),
    },
  },
})
