import { defineConfig } from "vite"

export default defineConfig({
  routerMode: 'hash',
  vite: {
    base: process.env.HISTOIRE_BASE || "/",
  },
})
