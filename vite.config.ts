import tailwindcss from "@tailwindcss/vite"
import vikeSolid from "vike-solid/vite"
import vike from "vike/plugin"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [vike(), vikeSolid(), tailwindcss()],
  build: {
    target: "es2022",
  },
})
