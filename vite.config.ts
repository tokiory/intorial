import {defineConfig} from 'vite'
import {fileURLToPath} from "node:url";

const resolve = (path = "") => fileURLToPath(new URL(`./src${path}`, import.meta.url))

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve()
      }
    ]
  },
  build: {
    rollupOptions: {
      external: [
        'lit',
        'shiki',
        'normalize.css'
      ]
    },
    lib: {
      entry: {
        index: 'src/bundles/index.ts',
        element: 'src/my-element.ts',
      }
    }
  }
})
