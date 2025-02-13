import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  devServer: {
    port: 5070,
  },
  plugins: [vue()],
})
