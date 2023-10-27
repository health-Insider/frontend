import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,tsx,jsx}'
  ],
  theme: {
    extend: {}
  },
})
