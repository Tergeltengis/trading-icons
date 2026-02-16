import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  build:
    command === "build"
      ? {
          lib: {
            entry: "src/index.ts",
            name: "TradingIcons",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
          },
          rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
          },
        }
      : undefined,
}));
