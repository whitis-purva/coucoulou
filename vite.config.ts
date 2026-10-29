import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
  server: {
    // "::" accepts IPv6 and, on this machine, IPv4 as well. Binding only
    // 0.0.0.0 makes browsers that try ::1 first get connection refused.
    host: "::",
    port: 43123,
    strictPort: true,
  },
  preview: {
    host: "::",
    port: 43123,
    strictPort: true,
  },
})
