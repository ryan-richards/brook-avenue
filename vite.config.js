import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["**/*.pdf", "**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.webp"],
});
