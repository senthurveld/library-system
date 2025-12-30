import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/library-system/",
  plugins: [tailwindcss()],
  server: {
    port: 3001,
  },
});
