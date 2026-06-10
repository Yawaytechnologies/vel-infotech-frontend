import { defineConfig } from 'vite'
import react  from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    // react-snap's bundled Chromium (~v66) doesn't support optional chaining or
    // nullish coalescing — target es2019 so Vite transpiles those away
    target: 'es2019',
  },
})
