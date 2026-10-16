import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // react()       -> JSX support + fast refresh while developing
  // tailwindcss() -> Tailwind v4 as a Vite plugin (no tailwind.config.js needed)
  plugins: [react(), tailwindcss()],
});
