import { defineConfig } from "vite"

export default defineConfig({
  vite: {
    base: process.env.HISTOIRE_BASE || "/",
  },
})
