import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { env } from "node:process";

const host = env.TAURI_DEV_HOST;

export default defineConfig(() => ({
  plugins: [tanstackRouter({ target: "react", autoCodeSplitting: true }), react()],
  clearScreen: false,
  server: {
    port: 1429,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1430,
        }
      : undefined,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
}));
