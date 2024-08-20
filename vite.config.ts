import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Web Component logic
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "st-button",
      fileName: (format) => `button.${format}.js`,
    },
    target: "esnext",
    rollupOptions: {
    },
  },
});
