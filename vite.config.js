import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Learn-Lingo/",
  plugins: [react()],
  extensions: [".jsx", ".json", ".css", ".js"],
});
