import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
  base: '/masked-image/',
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
})
