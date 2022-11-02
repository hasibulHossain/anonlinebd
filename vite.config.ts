import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  server: {host: true},
  plugins: [
  	viteStaticCopy({targets: [{src: 'CNAME', dest: ''}]})
  ]
})
